const { Anki } = require('../main/utils/anki.js');

class ApplicationState {
  constructor() {
    this.settings = {
      path: Anki.getDecksPath()
    };
  }
}

module.exports = { ApplicationState };
