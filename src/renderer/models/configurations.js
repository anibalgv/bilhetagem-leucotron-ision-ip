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

  getDefaultConfigurarion(){
    try {
      return {
        "app_first_run": true,
        "app_auto_import": false,
        "app_auto_import_interval": 1,
        "ftp_host": "192.168.0.252",
        "ftp_user": "admin",
        "ftp_password": "master",
        "ftp_port": "21"
      };
    } catch (error) {
      console.log('[CONFIGURATIONS][GETDEFAULTCONFIGURATION]', error);
    }
  }

}