import createSagaMiddleware from "redux-saga";
import {routerMiddleware, connectRouter} from "connected-react-router/immutable";
import {applyMiddleware, compose, createStore} from "redux";
import createReducer from "./store/reducer";
import {rootSaga} from "./store/saga";
import {createLogger} from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState: any, history: any) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  if (process.env.NODE_ENV !== "production") {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO: Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
      : compose;

  const rootReducer = createReducer();

  const store = createStore(connectRouter(history)(rootReducer), initialState, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
