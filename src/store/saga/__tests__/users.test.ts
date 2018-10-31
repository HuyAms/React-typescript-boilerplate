import {put} from "redux-saga/effects";
import {fetchUsersSaga} from "../users";
import * as actions from "../../actions/users";
import {IUser} from "../../../models/User";

describe("fetchUserSaga", () => {
  let fetchUserGenerator: any;

  beforeEach(() => {
    fetchUserGenerator = fetchUsersSaga();

    const callDescriptor = fetchUserGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the fetchUsersSuccess action if it requests the data successfully", () => {
    interface IResponse {
      data: IUser[];
    }

    const response: IResponse = {
      data: [],
    };

    const putDescriptor = fetchUserGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(actions.fetchUsersSuccess(response.data)));
  });

  it("should dispatch the fetchUsersFail action if the response errors", () => {
    const error = new Error("Some error");
    const putDescriptor = fetchUserGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.fetchUsersFail(error.message)));
  });
});
