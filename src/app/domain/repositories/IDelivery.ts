import { EDeliveryStatus } from './EDeliveryStatus';

export interface IDelivery {
  isDelivery: boolean;
  status: EDeliveryStatus;
  price: number;
}
