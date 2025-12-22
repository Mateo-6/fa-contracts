import { CreditCardDetails } from '../interfaces/credit-card-details.interface';
import { BankAccountDetails } from '../interfaces/bank-account-details.interface';
import { CashDetails } from '../interfaces/cash-details.interface';

/**
 * Union type for all payment method details.
 */
export type PaymentMethodDetails = CreditCardDetails | BankAccountDetails | CashDetails;
