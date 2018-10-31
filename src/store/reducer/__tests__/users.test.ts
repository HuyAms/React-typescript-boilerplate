import {fromJS, List} from "immutable";
import userReducer from "../users";
import {fetchUsersStart, fetchUsersSuccess, fetchUsersFail} from "../../actions/users";
import {IUser} from "../../../models/User";
import Users from "../../../models/Users";

describe("userReducer", () => {
  const initialState = new Users();

  let state: any;

  beforeEach(() => {
    state = fromJS(initialState);
  });

  it("should return the initial state", () => {
    const expectedResult = state;
    expect(userReducer(undefined, {})).toEqual(expectedResult);
  });

  it("should handle fetchUserStartAction correctly", () => {
    const expectedResult = state.set("error", null).set("isLoading", true);
    expect(userReducer(state, fetchUsersStart())).toEqual(expectedResult);
  });

  it("should handle fetchUsersSuccess correctly", () => {
    const testUsers: IUser[] = [
      {
        id: 1,
        username: "Bret",
        email: "Sincere@april.biz",
        phone: " 1-770-736-8031 x56442",
        website: "hildegard.org",
      },
    ];

    const expectedResult = state.set("users", List(testUsers)).set("isLoading", false);
    expect(userReducer(state, fetchUsersSuccess(testUsers))).toEqual(expectedResult);
  });

  it("should handle fetchUsersFail correctly", () => {
    const error = "Test error";
    const expectedResult = state.set("error", error).set("isLoading", false);
    expect(userReducer(state, fetchUsersFail(error))).toEqual(expectedResult);
  });
});
