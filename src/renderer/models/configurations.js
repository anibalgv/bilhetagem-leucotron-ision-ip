import fs from 'fs';

export default class Configurations {
  constructor() { }


  getConfiguration() {
    try {
      const configurations = fs.readFileSync(__dirname + '/../database/configurations.json');
      const configuration = JSON.parse(configurations);
      console.log('[CONFIGURATIONS][GETCONFIG]\n', configuration);
      return configuration;
    } catch (error) {
      console.log('[CONFIGURATIONS][GETCONFIG] -> ERROR\n', error);
    }
  }

  setConfiguration(_configuration) {
    try {
      // return;
      const configuration = JSON.stringify(_configuration);
      fs.writeFileSync(__dirname + '/../database/configurations.json', configuration);
      console.log('[CONFIGURATIONS][SETCONFIG]\n', configuration);
      return true;
    } catch (error) {
      console.log('[CONFIGURATIONS][SETCONFIG] -> [ERROR]\n', error);
      return false;
    }

  }

}