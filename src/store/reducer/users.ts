import {fromJS} from "immutable";
import {IUser} from "../../models/User";
import {userActionType} from "../actions/actionTypes";

export interface IState {
  users: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  users: [],
  loading: false,
  error: null,
};

const reducer = (state = fromJS(initialState), action: any) => {
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
  return state.set("error", null).set("loading", true);
};

const fetchUsersSuccess = (state: any, action: any) => {
  return state.set("users", action.users).set("loading", false);
};

const fetchUsersFail = (state: any, action: any) => {
  return state.set("error", action.error).set("loading", false);
};

export default reducer;
