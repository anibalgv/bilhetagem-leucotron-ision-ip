import fs from 'fs';

export default class Configurations {
  resourcePath = null;

  constructor() {
    if (process.env.NODE_ENV !== 'development')
      this.resourcePath = process.cwd() + '/resources/extraResources/configurations.json';
    else
      this.resourcePath = __dirname + '/../database/configurations.json';
  }


  getConfiguration() {
    try {
      const configurations = fs.readFileSync(this.resourcePath);
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
      fs.writeFileSync(this.resourcePath, configuration);
      console.log('[CONFIGURATIONS][SETCONFIG]\n', configuration);
      return true;
    } catch (error) {
      console.log('[CONFIGURATIONS][SETCONFIG] -> [ERROR]\n', error);
      return false;
    }

  }

  getDefaultConfigurarion() {
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