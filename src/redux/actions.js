const { createAliasedAction } = require('electron-redux');

const ACTIONS = {
  SETTINGS_UPDATE: 'settings.update',
  SETTINGS_LOAD: 'settings.load'
};

const updateSettings = path => ({
  type: ACTIONS.SETTINGS_UPDATE,
  payload: { path }
});

const loadSettings = createAliasedAction(
  ACTIONS.SETTINGS_LOAD,
  path => ({
    type: ACTIONS.SETTINGS_LOAD,
    payload: { path }
  })
);

module.exports = {
  ACTIONS,
  updateSettings,
  loadSettings
};
