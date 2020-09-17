export default class Calls {

  constructor() { }

  AllAttributes() {
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

  AllTypes() {
    return [
      { I: 'INTERNA' },
      { O: 'ORIGINADA' },
      { R: 'RECEBIDA' },
    ];
  }

  getAttributesInfo(_keysAttributes) {
    // T/AAAA: tipo e atributos da ligação. 
    try {
      const attributes = _keysAttributes.split('');
      let type = attributes[0];
      let attribute = attributes[1] ? attributes[1] : null;
      let info = [];
      let filteredAttributes = [];

      info['type'] = this.AllTypes().filter((key) => {
        return Object.keys(key) == type;
      })[0];
      if (attribute) {
        info['attribute'] = this.AllAttributes().filter(key => {
          return Object.keys(key) == attribute;
        })[0];
      }else {
        info['attribute'] = '';
      }
      // for (let i = 0; i < this.AllAttributes().length; i++) {
      //   const attribute = this.AllAttributes()[i];
      //   for (let j = 0; j < attributes.length; j++) {
      //     const informedAttribute = attributes[j];
      //     if(Object.keys(attribute) == informedAttribute){
      //       filteredAttributes.push(attribute);
      //     }
      //   }
      // }
      //info['attributes'] = filteredAttributes;
      console.log('[CALLS][GETATTRIBUTESINFO] INFO\n', info);
      return info;
    } catch (error) {
      console.log('[CALLS][GETATTRIBUTESINFO] ERROR\n', error);
    }
  }
}
// module.exports = { Calls }