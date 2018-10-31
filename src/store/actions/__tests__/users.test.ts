import {userActionType} from "../actionTypes";
import {fetchUsersStart, fetchUsersSuccess, fetchUsersFail} from "../users";
import {IUser} from "../../../models/User";

describe("User Actions", () => {
  describe("fetchUsersStart", () => {
    it("should return the correct type", () => {
      const expectedResult = {
        type: userActionType.FETCH_USER_START,
      };

      expect(fetchUsersStart()).toEqual(expectedResult);
    });
  });

  describe("fetchUsersSuccess", () => {
    const testUsers: IUser[] = [
      {
        id: 1,
        username: "Bret",
        email: "Sincere@april.biz",
        phone: " 1-770-736-8031 x56442",
        website: "hildegard.org",
      },
    ];

    it("should return the correct type", () => {
      const expectedResult = {
        type: userActionType.FEFETCH_USER_SUCCESS,
        users: testUsers,
      };

      expect(fetchUsersSuccess(testUsers)).toEqual(expectedResult);
    });
  });

  describe("fetchUsersFail", () => {
    it("should return the correct type", () => {
      const testError = "error";

      const expectedResult = {
        type: userActionType.FETCH_USER_FAIL,
        error: testError,
      };

      expect(fetchUsersFail(testError)).toEqual(expectedResult);
    });
  });
});
