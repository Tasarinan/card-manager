/**
 * Initialize store on renderer side.
 */
import {
  createStore,
  applyMiddleware
} from 'redux';

import {
  forwardToMain,
  replayActionRenderer,
  getInitialStateRenderer
} from 'electron-redux';

const reducers = require('./reducers');

const initialState = getInitialStateRenderer();

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(
    // IMPORTANT! This goes first
    forwardToMain
  ),
);

replayActionRenderer(store);

export default store;
