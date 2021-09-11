import { IDelivery } from './IDelivery';
import { IItem } from './IItem';
import { IOrderStatus } from './IOrderStatus';
import { IUser } from './IUser';

export interface IOrder {
  user: IUser;
  item: IItem[];
  address: string;
  reference: string;
  status: IOrderStatus;
  delivery: IDelivery;
  createdAt: Date;
  modifiedAt: Date;
}
