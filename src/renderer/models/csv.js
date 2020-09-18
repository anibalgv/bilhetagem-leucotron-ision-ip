export default class CSV {
  
  constructor() { }

  ConvertToJSON(_headers, _text) {
    try {
      let array = _text.split('\n');
      let json = [];
      for (let i = 0; i < array.length; i++) {
        let temp = {};
        const row = array[i];
        let values = row.split(',');
        for (let j = 0; j < values.length; j++) {
          const key = _headers[j];
          const value = values[j];
          temp[key] = value.replace('"', '').replace('"', '').trim();
        }
        if('undefined' in temp)
          delete temp['undefined'];
        json.push(temp);
      }
      console.log('[CSV][CONVERTTOJSON]\n', json);
      return (json);
    } catch (error) {
      console.log('[CSV][CONVERTTOJSON] -> ERROR\n', error);
    }
  }

}

