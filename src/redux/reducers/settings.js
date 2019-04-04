const { ACTIONS } = require('../actions.js');

const settings = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SETTINGS_UPDATE:
      return {
        ...state,
        path: action.payload.path
      };
    case ACTIONS.SETTINGS_LOAD:
      return {
        ...state,
        path: action.payload.path
      };
    default:
      return state;
  }
};

module.exports = settings;
