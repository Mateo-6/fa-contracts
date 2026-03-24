import { BankAccountType } from '../enums/bank-account-type.enum';

/**
 * Bank account details structure.
 */
export interface BankAccountDetails {
  bank_name: string;
  account_number: string; // Last 4 digits (required)
  account_type: BankAccountType;
  current_balance: number; // Tracked balance, updated on every transaction
}
