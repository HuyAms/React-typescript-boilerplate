import Users from "../../models/Users";
import {userActionType} from "../actions/actionTypes";
import {List} from "immutable";

const initialState = new Users();

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case userActionType.FETCH_USER_START:
      return fetchUsersStart(state, action);
    case userActionType.FEFETCH_USER_SUCCESS:
      return fetchUsersSuccess(state, action);
    case userActionType.FETCH_USER_FAIL:
      return fetchUsersFail(state, action);
    default:
      return state;
  }
};

const fetchUsersStart = (state: any, action: any) => {
  return state.set("error", null).set("isLoading", true);
};

const fetchUsersSuccess = (state: any, action: any) => {
  return state.set("users", List(action.users)).set("isLoading", false);
};

const fetchUsersFail = (state: any, action: any) => {
  return state.set("error", action.error).set("isLoading", false);
};

export default reducer;
