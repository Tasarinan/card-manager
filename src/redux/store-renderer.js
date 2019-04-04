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
    forwardToMain // IMPORTANT! This goes first
  ),
);

replayActionRenderer(store);

export default store;
