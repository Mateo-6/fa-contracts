import { PaymentMethodType } from '../enums/payment-method-type.enum';
import { PaymentMethodDetails } from '../types/payment-method-details.type';

/**
 * Payment method domain entity.
 */
export interface PaymentMethod {
  id?: string;
  userId: string;
  name: string;
  type: PaymentMethodType;
  currency: string;
  details: PaymentMethodDetails;
  createdAt?: Date;
  updatedAt?: Date;
}
