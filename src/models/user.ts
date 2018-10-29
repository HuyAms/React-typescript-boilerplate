import {Record} from "immutable";

export interface User {
  id: number;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
