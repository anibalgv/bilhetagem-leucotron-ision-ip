export default class Calls {

  constructor() { }

  getAllAtributos() {
    return [
      { A: 'AUTOMATICA' },
      { C: 'CAPTURADA' },
      { E: 'ORIGEM EXTERNA' },
      { F: 'NAO ENCAMINHADA' },
      { G: 'GRATUITA' },
      { L: 'INTERLIGACAO' },
      { X: 'OCUPADA/INDISPONIVEL' },
      { N: 'NORMAL' },
      { P: 'INDIRETA (PASSWORD CALL)' },
      { T: 'TRANSFERIDA' },
      { U: 'NAO ATENDIDA' },
    ];
  }
  

  getAllTipos() {
    return [
      { I: 'INTERNA' },
      { O: 'ORIGINADA' },
      { R: 'RECEBIDA' },
    ];
  }

  getAtributosInfo(_keysAtributos) {
    // T/AAAA: tipo e atributos da ligação. 
    try {
      const atributos = _keysAtributos.split('');
      let tipo = atributos[0];
      let atributo = atributos[1] ? atributos[1] : null;
      let info = [];

      info['tipo'] = this.getAllTipos().filter((key) => {
        return Object.keys(key) == tipo;
      })[0];
      if (atributo) {
        info['atributo'] = this.getAllAtributos().filter(key => {
          return Object.keys(key) == atributo;
        })[0];
      }else{
        info['atributo'] = {O: 'ATENDIDA'};
      }
      console.log('[CALLS][GETATRIBUTOSINFO] INFO\n', info);
      return info;
    } catch (error) {
      console.log('[CALLS][GETATRIBUTOSINFO] ERROR\n', error);
    }
  }
}