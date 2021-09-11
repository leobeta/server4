import { UserType } from './EUserType';

export interface IUser {
  name: string;
  email: string;
  cellphone: string;
  address: string;
  password: string;
  active: boolean;
  type: UserType;
  createdDate: Date;
  modified: Date;

  createUser(): IUser;
  modifyUser(): IUser;
  comparePassword(): boolean;
  auth(): boolean;
  authorized(): boolean;
}
