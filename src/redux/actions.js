const { createAliasedAction } = require('electron-redux');

const ACTIONS = {
  SETTINGS_WRITE: 'settings.write',
  SETTINGS_READ: 'settings.read'
};

const writeSettings = path => ({
  type: ACTIONS.SETTINGS_WRITE,
  payload: { path }
});

const readSettings = createAliasedAction(
  ACTIONS.SETTINGS_READ,
  path => ({
    type: ACTIONS.SETTINGS_READ,
    payload: { path }
  })
);

module.exports = {
  ACTIONS,
  writeSettings,
  readSettings
};
