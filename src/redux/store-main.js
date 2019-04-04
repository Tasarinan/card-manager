/**
 * Initialize store on main process side.
 */
const redux = require('redux');
const electronRedux = require('electron-redux');

// const { ApplicationState } = require('./application-state.js');
const reducers = require('./reducers');

const initialState = {
  settings: {
    path: 'initial'
  }
};
// const initialState = new ApplicationState();

const store = redux.createStore(
  reducers,
  initialState,
  redux.applyMiddleware(
    electronRedux.triggerAlias,
    electronRedux.forwardToRenderer, // IMPORTANT! This goes last
  )
);

electronRedux.replayActionMain(store);

module.exports = store;
