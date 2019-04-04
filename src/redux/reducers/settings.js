const { ACTIONS } = require('../actions.js');

const settings = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SETTINGS_WRITE:
      return {
        ...state,
        path: action.payload.path,
        ready: true
      };
    case ACTIONS.SETTINGS_READ:
      return {
        ...state,
        path: action.payload.path
      };
    default:
      return state;
  }
};

module.exports = settings;
