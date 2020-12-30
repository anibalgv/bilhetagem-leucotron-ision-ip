import sqlite from 'sqlite-sync';
import Files from './files';
import CSV from './csv';
import Ftp from './ftp';
import Calls from './calls';
import JSONS from './jsons';
import Configurations from './configurations';

export default class Tickets {

  databasePath = null;
  bilhetPath = null;

  constructor() {
    if (process.env.NODE_ENV !== 'development') {
      this.databasePath = process.cwd() + '/resources/extraResources/tickets.sqlite';
      this.bilhetPath = process.cwd() + '/resources/extraResources/bilhet';
    }
    else {
      this.databasePath = __dirname + '/../database/tickets.sqlite';
      this.bilhetPath = __dirname + '/../downloads/bilhet';
    }
  }

  getKeys() {
    return [
      'equipamento', 'responsavel', 'data_inicio', 'hora_inicio', 'hora_incio_segmento',
      'tempo_bilhete', 'tempo_ligacao', 'tempo_atendimento', 'reservado', 'identificacao_linha', 'numero_rota',
      'numero_externo', 'ligacao_transferida', 'atributo_ligacao', 'password_call', 'call_stamp', 'packetloss',
      'jitter_evaluation', 'rastreador', 'nome_usuario', 'email_usuario'
    ];
  }

  All() {
    try {
      sqlite.connect(this.databasePath);
      var rows = sqlite.run("SELECT * FROM tickets");
      sqlite.close();
      console.log('[TICKETS][ALL]');
      return rows;
    } catch (error) {
      console.log(error);
      console.log('[TICKETS][ALL] -> ERROR\n', error);
    }
  }

  Insert(_ticketsJSON) {
    try {
      sqlite.connect(this.databasePath);
      for (let i = 0; i < _ticketsJSON.length; i++) {
        const ticket = _ticketsJSON[i];
        if (ticket.equipamento) {
          ticket['data'] = ticket.data_inicio.split('/').reverse().join('-');
          ticket['tipo'] = Object.values(new Calls().getAtributosInfo(ticket.atributo_ligacao).tipo)[0];
          ticket['atributo'] = Object.values(new Calls().getAtributosInfo(ticket.atributo_ligacao).atributo)[0];
          console.log('ticket :', ticket);
          const id = sqlite.insert('tickets', ticket);
          console.log('[TICKETS][INSERT] ', id);
        }
      }
      sqlite.close();
      return true;
    } catch (error) {
      console.log('[TICKETS][INSERT] -> ERROR\n', error);
      return false;
    }
  }

  async Import() {
    try {
      console.log('[TICKETS][IMPORT]');
      const download = await new Ftp().Download('bilhet00');
      if (download == false) {
        return false;
      }
      const bilhet = new Files().Read(this.bilhetPath);
      const ticketsJSON = new CSV().ConvertToJSON(this.getKeys(), bilhet);
      let result = this.Insert(ticketsJSON);
      // new Files().Delete('./downloads/bilhet');
      // await new Ftp().Delete();
      return result;
    } catch (error) {
      console.log('[TICKETS][IMPORT] -> ERROR\n', error);
      return false;
    }
  }

  getByDate(_date_start, _date_end) {
    try {
      sqlite.connect(this.databasePath);
      const tickets = sqlite.run("SELECT *  FROM tickets  WHERE data BETWEEN ? AND ? ;", [_date_start, _date_end]);
      console.log('[TICKETS][GETBYDATE] ', _date_start, _date_end, tickets);
      return tickets;
    } catch (error) {
      console.log('[TICKETS][GETBYDATE] -> ERROR\n', error);
      return false;
    }
  }

  ExportToJSON() {
    try {
      const tickets = this.All();
      const ticketsTEXT = JSON.stringify(tickets);
      console.log('[TICKETS][EXPORTTOJSON]', tickets);
      new Files().SaveDialog('exported_tickets.json', ticketsTEXT);
    } catch (error) {
      console.log('[TICKETS][EXPORTTOJSON] -> ERROR\n', error);
    }
  }

  ExportToCSV() {
    try {
      const tickets = this.All();
      const ticketsCSV = new JSONS().ConverToCSV(tickets);
      new Files().SaveDialog('exported_tickets.csv', ticketsCSV);
      console.log('[TICKETS][EXPORTTOCSV]');
    } catch (error) {
      console.log('[TICKETS][EXPORTTOCSV] -> ERROR\n', error);
    }
  }

  getByYearMonthDay(_year, _month, _day) {
    try {
      sqlite.connect(this.databasePath);
      let query = 'SELECT * FROM TICKETS ';
      if (_year)
        query += " WHERE STRFTIME('%Y', `data`) = " + `'${_year}'`
      if (_year && _month)
        query += " AND STRFTIME('%m', `data`) = " + `'${_month}'`;
      if (_year && _month && _day)
        query += " AND STRFTIME('%d', `data`) = " + `'${_day}'`;
      const tickets = sqlite.run(query)
      sqlite.close();
      console.log('[TICKETS][GETBYYEARMONTHDAY]\n', tickets);
      return tickets;
    } catch (error) {
      console.log('[TICKETS][GETBYYEARMONTHDAY] -> ERROR\n', error);
    }
  }

  getYears() {
    try {
      sqlite.connect(this.databasePath);
      const years = sqlite.run("select strftime('%Y', `data`) AS `year` from tickets GROUP BY strftime('%Y', `data`)");
      let temp = [];
      years.forEach(year => {
        if (year) {
          temp.push(Object.values(year));
        }
      });
      console.log('[TICKETS][GETYEARS]\n', temp);
      return temp;
    } catch (error) {
      console.log('[TICKETS][GETYEARS] -> ERROR\n', error);
    }
  }

  getByNumeroExterno(_numeroExterno) {
    try {
      sqlite.connect(this.databasePath);
      const tickets = sqlite.run("SELECT * FROM tickets WHERE numero_externo LIKE('%', ? , '%')", [_numeroExterno]);
      sqlite.close();
      console.log('[TICKETS][GETBYNUMEROEXTERNO]', _numeroExterno);
      return tickets;
    } catch (error) {
      console.log('[TICKETS][GETBYNUMEROEXTERNO] -> ERROR\n', error);
    }
  }

  getRamais() {
    try {
      sqlite.connect(this.databasePath);
      const tickets = sqlite.run("SELECT responsavel FROM tickets GROUP BY responsavel;");
      sqlite.close();
      console.log('[TICKETS][GETRAMAIS]', tickets);
      return tickets;
    } catch (error) {
      console.log('[TICKETS][GETRAMAIS] -> ERROR\n', error);
    }
  }

  getLastRecord() {
    try {
      sqlite.connect(this.databasePath);
      const ticket = sqlite.run("SELECT * FROM tickets ORDER BY id DESC LIMIT 1;");
      sqlite.close();
      console.log('[TICKETS][GETLASTRECORD]', ticket[0]);
      return ticket[0];
    } catch (error) {
      console.log('[TICKETS][GETLASTRECORD] -> ERROR\n', error);
    }
  }

  getBySynchronized(_synchronized) {
    try {
      sqlite.connect(this.databasePath);
      const sincronizado = !!_synchronized ? 1 : 0;
      let tickets = sqlite.run("SELECT * FROM tickets WHERE sincronizado = ?;", [sincronizado]);
      sqlite.close();
      console.log('[TICKETS][GETBYSYNC]', _synchronized, tickets);
      return tickets;
    } catch (error) {
      console.log('[TICKETS][GETBYSYNC] -> ERROR\n', error);
    }
  }

  async SyncToApi() {
    try {
      const configuration = new Configurations().getConfiguration();
      const tickets = this.getBySynchronized(false);
      let synchronized = await fetch(configuration.api_address, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          // "X-Requested-With": "XMLHttpRequest",
        },
        credentials: "same-origin",
        method: 'post',
        body: JSON.stringify(tickets),
        
      }).then(function (response) {
         console.log('response', response);
         console.log('response', response.json());
      });
      console.log('[TICKETS][SYNCTOAPI]');
      await console.log('synchronized :', synchronized);
      // if (await synchronized.ok)
      //   this.setAsSynchronied(tickets);
      // return true;
    } catch (error) {
      console.log('[TICKETS][SYNCTOAPI]  ERROR => ', error);
      return false;
    }
  }

  setAsSynchronied(_tickets) {
    try {
      const tickets = _tickets.map(item => item.id);
      sqlite.connect(this.databasePath);
      sqlite.run("UPDATE tickets SET sincronizado =1 WHERE tickets.id IN (?) ", [tickets]);
      sqlite.close();
      console.log('[TICKETS][SETASSYNCHRONIED]', tickets);
      return true;
    } catch (error) {
      console.log('[TICKETS][SETASSYNCHRONIED] -> ERROR\n', error);
      return false;
    }
  }

}// END class
