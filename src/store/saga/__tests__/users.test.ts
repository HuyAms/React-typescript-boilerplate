import {put} from "redux-saga/effects";
import {fetchUsersSaga} from "../users";
import * as actions from "../../actions/users";
import {User} from "../../../models/user";

describe("fetchUserSaga", () => {
  let fetchUserGenerator: any;

  beforeEach(() => {
    fetchUserGenerator = fetchUsersSaga();

    const callDescriptor = fetchUserGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("should dispatch the fetchUsersSuccess action if it requests the data successfully", () => {
    interface Response {
      data: User[];
    }

    const response: Response = {
      data: [],
    };

    const putDescriptor = fetchUserGenerator.next(response).value;
    expect(putDescriptor).toEqual(
      put(actions.fetchUsersSuccess(response.data)),
    );
  });

  it("should dispatch the fetchUsersFail action if the response errors", () => {
    const error = new Error("Some error");
    const putDescriptor = fetchUserGenerator.throw(error).value;
    expect(putDescriptor).toEqual(put(actions.fetchUsersFail(error.message)));
  });
});
