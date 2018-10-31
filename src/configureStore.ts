import createSagaMiddleware from "redux-saga";
import {connectRouter, routerMiddleware} from "connected-react-router";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import userReducer from "./store/reducer/user";
import {rootSaga} from "./store/saga";

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState: any, history: any) => {
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

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

  const rootReducer = combineReducers({
    user: userReducer,
  });

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
