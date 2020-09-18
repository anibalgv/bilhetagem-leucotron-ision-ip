import sqlite from 'sqlite-sync';
import Files from './files';
import CSV from './csv';
import Ftp from './ftp';
import Calls from './calls';
import JSONS from './jsons';

export default class Tickets {

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
      sqlite.connect(__dirname + '/../database/tickets.sqlite');
      var rows = sqlite.run("SELECT * FROM tickets");
      sqlite.close();
      return rows;
    } catch (error) {
      console.log(error);
      console.log('[TICKETS][ALL] -> ERROR\n', error);
    }
  }

  Insert(_ticketsJSON) {
    try {
      sqlite.connect(__dirname + '/../database/tickets.sqlite');
      for (let i = 0; i < _ticketsJSON.length; i++) {
        const ticket = _ticketsJSON[i];
        console.log('ticket :', ticket);
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
    } catch (error) {
      console.log('[TICKETS][INSERT] -> ERROR\n', error);
    }
  }

  async Import() {
    try {
      console.log('[TICKETS][IMPORT]');
      const download = await new Ftp().Download('bilhet00');
      if (!download) {
        return
      }
      const bilhet = new Files().Read(__dirname + '/../downloads/bilhet');
      const ticketsJSON = new CSV().ConvertToJSON(this.getKeys(), bilhet);
      this.Insert(ticketsJSON);
      // new Files().Delete('./downloads/bilhet');
      // await new Ftp().Delete();
      return true;
    } catch (error) {
      console.log('[TICKETS][IMPORT] -> ERROR\n', error);
      return false;
    }
  }

  getByDate(_date_start, _date_end) {
    try {
      sqlite.connect(__dirname + '/../database/tickets.sqlite');
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
      //fs.writeFileSync(__dirname + '/../database/exported_tickets.json', ticketsTEXT);
      console.log('[TICKETS][EXPORTTOJSON]', tickets);
      new Files().SaveDialog('exported_tickets.json', ticketsTEXT);
    } catch (error) {
      console.log('[TICKETS][EXPORTTOJSON] -> ERROR\n', error);
    }
  }

  ExportToCSV(){
    try {
      const tickets = this.All();
      const ticketsCSV = new JSONS().ConverToCSV(tickets);
      new Files().SaveDialog('exported_tickets.csv', ticketsCSV);
      console.log('[TICKETS][EXPORTTOCSV]');
    } catch (error) {
      console.log('[TICKETS][EXPORTTOCSV] -> ERROR\n', error);
    }
  }

}
