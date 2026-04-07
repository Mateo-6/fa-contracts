import { TransactionSubtype } from '../enums/transaction-subtype.enum';
import { TransactionType } from '../enums/transaction-type.enum';
import { CardPaymentDetails } from './card-payment-details.interface';
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
    /** Distinguishes special transaction kinds (e.g. CARD_PAYMENT). Null for regular transactions. */
    subtype?: TransactionSubtype | null;
    category: CategorySnapshot;
    paymentMethodId?: string;
    isRecurring: boolean;
    recurringExpenseId?: string;
    /** Present only when subtype === CARD_PAYMENT. Contains the target card and period info. */
    cardPaymentDetails?: CardPaymentDetails | null;
    sourcePaymentMethodId?: string;
    destinationPaymentMethodId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=transaction.interface.d.ts.map