const LINUX_PATH = '~/.local/share/Anki2';

class Anki {
  /**
   * Returns path to Anki's directory
   * @returns {string} path
   */
  static getDecksPath() {
    // TODO: should get Anki path for all supported OS.
    let path = null;
    path = LINUX_PATH;
    return path;
  }
}

module.exports = { Anki };
