import Configurations from "./configurations";
var ftp = require("basic-ftp");

export default class Ftp {

  bilhetPath = null;

  constructor() {
    if (process.env.NODE_ENV !== 'development'){
      this.bilhetPath = process.cwd() + '/resources/extraResources/bilhet';
    }
    else{
      this.bilhetPath = __dirname + '/../downloads/bilhet';
    }
  }

  async Connect() {
    const configuration = new Configurations().getConfiguration();
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
      await client.access({
        host: configuration.ftp_host,
        user: configuration.ftp_user,
        password: configuration.ftp_password,
        port: configuration.ftp_port,
      });
      console.log('[FTP][CONNECT]\n', client);
      return client;
    }
    catch (error) {
      console.log('[FTP][CONNECT] -> ERROR\n', error);
      client.close()
      return false;
    }
  }

  async Download(_sourceFile) {
    const client = await this.Connect();
    try {
      if (client == false)
        return false;
      await client.cd('C');
      let download = await client.downloadTo(this.bilhetPath, _sourceFile);
      console.log('[FTP][DOWNLOAD]\n', download);
      client.close();
      return true;
    } catch (error) {
      console.log('[FTP][DOWNLOAD] -> ERROR\n', error);
      client.close();
      return false;
    }
  }

  async Delete() {
    const client = await this.Connect();
    try {
      await client.cd('C');
      await client.remove('bilhet02');
      console.log('[FTP][DELETE]');
    } catch (error) {
      console.log('[FTP][DELETE] -> ERROR\n', error);
    }
    client.close();
  }

}

