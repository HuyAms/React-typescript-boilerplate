import {userActionType} from "./actionTypes";
import {User} from "../../models/user";

export const fetchUsersStart = () => {
  return {
    type: userActionType.FETCH_USER_START,
  };
};

export const fetchUsersSuccess = (users: User) => {
  return {
    type: userActionType.FEFETCH_USER_SUCCESS,
    users,
  };
};

export const fetchUsersFail = (error: string) => {
  return {
    type: userActionType.FETCH_USER_FAIL,
    error,
  };
};
