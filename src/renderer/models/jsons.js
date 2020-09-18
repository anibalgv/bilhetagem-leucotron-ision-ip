import {Parser}  from 'json2csv';

export default class JSONS{
  constructor(){}

  ConverToCSV(_json){
    try {
      const parser = new Parser()
      const csv  = parser.parse(_json);
      console.log('[JSONS][CONVERTOCSV]', csv);
      return csv;
    } catch (error) {
      console.log('[JSONS][CONVERTOCSV] -> ERROR\n', error);
    }
  }

}