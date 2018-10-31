import {combineReducers} from "redux-immutable";
import userReducer from "./users";

const createReducer = () => {
  return combineReducers({
    users: userReducer,
  });
};

export default createReducer;
