import {Record, List} from "immutable";
import IBaseModel from "./BaseModelInterface";
import User from "./User";
import _ from "lodash";

export interface IUsers {
  users: List<User>;
}

export interface IUsersStore extends IUsers, IBaseModel {}

const defaultValues: IUsersStore = {
  users: undefined,
  isLoading: false,
  error: undefined,
};

export default class Users extends Record(defaultValues) {
  constructor(js?) {
    const additionalFields: IBaseModel = {
      isLoading: false,
      error: null,
    };

    js ? super(_.merge(js, additionalFields)) : super();
  }
}
