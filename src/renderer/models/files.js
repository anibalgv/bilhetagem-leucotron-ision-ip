// var fs = require('fs');
import * as fs from 'fs';

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
}

// module.exports = { Files };