class Calls {

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
    const attributes = _keysAttributes.split('');
    let type = attributes[0];
    let info = [];
    let filteredAttributes = [];

    info['type'] = this.AllTypes().filter((key) => {
      return Object.keys(key) == type;
    })[0];
    for (let i = 0; i < this.AllAttributes().length; i++) {
      const attribute = this.AllAttributes()[i];
      for (let j = 0; j < attributes.length; j++) {
        const informedAttribute = attributes[j];
        if(Object.keys(attribute) == informedAttribute){
          filteredAttributes.push(attribute);
        }
      }
    }
    info['attributes'] = filteredAttributes;
    console.log('[CALLS][GETATTRIBUTESINFO] INFO\n', info);
    return info;
  }
}
// module.exports = { Calls }