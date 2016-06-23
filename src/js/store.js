import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';

export function configureStore(history, initialState) {

  const reducer = combineReducers({
    routing: routerReducer
  });

  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history),
        createLogger()
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
