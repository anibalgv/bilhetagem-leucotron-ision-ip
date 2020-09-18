import * as fs from 'fs';
import electron from 'electron';
export default class Files {

  constructor() { }

  Read(_file) {
    try {
      var data = fs.readFileSync(_file);
      console.log('[FILES][READ] ' + _file);
      return data.toString();
    } catch (error) {
      console.log('[FILES][READ] -> ERROR\n', error);
    }
  }

  Delete(_file) {
    try {
      fs.unlinkSync(_file);
      console.log('[FILES][DELETE] ', _file);
      return true;
    } catch (error) {
      console.log('[FILES][DELETE] -> ERROR\n', error);
      return false;
    }
  }

  SaveDialog(_path, _fileContent) {
    try {
      const dialog = electron.remote.dialog;
      dialog.showSaveDialog({
        title: 'SAVE FILE AS...',
        defaultPath: _path,
        buttonLabel: 'SAVE EXPORTED FILE',
        filters: [],
      }, function (file) {
        fs.writeFileSync(file, _fileContent );
      });
    } catch (error) {
      console.log('[FILES][DOWNLOAD] -> ERROR\n', error);
    }
  }

}
