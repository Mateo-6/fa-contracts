import { TransactionType } from '../enums/transaction-type.enum';
import { CategorySnapshot } from './category-snapshot.interface';

/**
 * Transaction entity representing a real money movement (Income or Expense).
 */
export interface Transaction {
  id?: string;
  userId: string;
  amount: number;
  description: string;
  date: Date;
  type: TransactionType;
  category: CategorySnapshot; // Embedded snapshot to avoid lookups
  paymentMethodId?: string; // Reference to PaymentMethod (required for EXPENSE, optional for INCOME)
  isRecurring: boolean;
  recurringExpenseId?: string; // Optional reference to RecurringExpense
  createdAt?: Date;
  updatedAt?: Date;
}
