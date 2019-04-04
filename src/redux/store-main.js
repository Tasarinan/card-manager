/**
 * Initialize store on main process side.
 */
const redux = require('redux');
const electronRedux = require('electron-redux');

const reducers = require('./reducers');

const initialState = {
  settings: {
    ready: false,
    ankiPath: undefined
  }
};

const store = redux.createStore(
  reducers,
  initialState,
  redux.applyMiddleware(
    electronRedux.triggerAlias,
    // IMPORTANT! This goes last
    electronRedux.forwardToRenderer
  )
);

electronRedux.replayActionMain(store);

module.exports = store;
