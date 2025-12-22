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
    category: CategorySnapshot;
    paymentMethodId?: string;
    isRecurring: boolean;
    recurringExpenseId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=transaction.interface.d.ts.map