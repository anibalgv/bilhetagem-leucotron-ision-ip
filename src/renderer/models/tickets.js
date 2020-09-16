
// var sqlite = require('sqlite-sync');
import sqlite from 'sqlite-sync';
// var { Files } = require('./files');
import Files from './files';
// var { CSV } = require('./csv');
import CSV from './csv';
// var { Ftp } = require('./ftp');
import Ftp from './ftp';

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
      sqlite.connect('./database/tickets.sqlite');
      var rows = sqlite.run("SELECT * FROM tickets");
      return rows;
    } catch (error) {
      console.log(error);
    }
  }

  Insert(_ticketsJSON) {
    try {
      sqlite.connect(__dirname + '/../database/tickets.sqlite');
      for (let i = 0; i < _ticketsJSON.length; i++) {
        const ticket = _ticketsJSON[i];
        if (ticket.equipamento) {
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
}
// module.exports = Tickets;