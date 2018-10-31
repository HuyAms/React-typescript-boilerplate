import {Record} from "immutable";
import IBaseModel from "./BaseModelInterface";
import _ from "lodash";

export interface IUser {
  id: number;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface IUserStore extends IUser, IBaseModel {}

const defaultValues: IUserStore = {
  id: undefined,
  username: undefined,
  email: undefined,
  phone: undefined,
  website: undefined,
  isLoading: false,
  error: undefined,
};

export default class User extends Record(defaultValues) {
  constructor(js?) {
    const additionalFields: IBaseModel = {
      isLoading: false,
      error: null,
    };

    js ? super(_.merge(js, additionalFields)) : super();
  }
}
