import { EProductStatus } from './EProductStatus';
import { IProduct } from './IProduct';

export interface IItem {
  product: IProduct;
  quantity: number;
  status: EProductStatus;
}
