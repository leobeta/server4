import { EOrderStatus } from './EOrderStatus';
import { EPaymentType } from './EPaymentType';

export interface IOrderStatus {
  status: EOrderStatus;
  paymentType: EPaymentType;
}
