var ftp = require("basic-ftp");

export default class Ftp {
  constructor() { }

  async Connect() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
      await client.access({
        host: '192.168.0.252',
        user: 'admin',
        password: 'master',
        port: 21,
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
      let download = await client.downloadTo(__dirname + "/../downloads/bilhet", _sourceFile);
      console.log('[FTP][DOWNLOAD]\n', download);
      return true;
    } catch (error) {
      console.log('[FTP][DOWNLOAD] -> ERROR\n', error);
      client.close();
      return false;
    }
    finally {
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

