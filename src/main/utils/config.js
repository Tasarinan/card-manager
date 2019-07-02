const fs = require('fs');
const electron = require('electron');
const path = require('path');

let instance;

class Config {
  constructor() {
    const pathToConfig = (electron.app || electron.remote.app).getPath('userData');
    this.configPath = path.join(pathToConfig, 'card-manager', 'config.json');
    this.data = {};
  }

  get(key) {
    return this.data[key];
  }

  set(key, value) {
    this.data[key] = value;
  }

  async load() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.configPath, (error, jsonData) => {
        if (error) {
          if (error && error.code === 'ENOENT') {
            this.data = {};
            return resolve(this.data);
          }
          return reject(error);
        }
        try {
          this.data = JSON.parse(jsonData.toString());
          return resolve(this.data);
        } catch (parsingError) {
          return reject(parsingError);
        }
      });
    });
  }

  async saveToDisk() {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.configPath, this.data.toJSON(), (error) => {
        if (error) {
          return reject(error);
        }
        return resolve();
      });
    });
  }
}

module.exports = (() => {
  if (!instance) {
    return new Config();
  }
  return instance;
})();
