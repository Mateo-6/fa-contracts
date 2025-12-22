import { RecurringFrequency } from '../enums/recurring-frequency.enum';

/**
 * Recurring expense entity representing a subscription or fixed expense configuration.
 * This entity represents the configuration of a repetitive expense, NOT the payment history.
 */
export interface RecurringExpense {
  id?: string;
  userId: string;
  name: string;
  amount: number;
  currency: string;
  categoryId: string;
  paymentMethodId: string;
  frequency: RecurringFrequency;
  payDay: number; // Day of the month (1-31)
  startDate: Date;
  nextPaymentDate: Date;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
