import { BankAccountType } from '../enums/bank-account-type.enum';
/**
 * Bank account details structure.
 */
export interface BankAccountDetails {
    bank_name: string;
    account_number: string;
    account_type: BankAccountType;
    current_balance: number;
    is_gmf_exempt?: boolean;
}
//# sourceMappingURL=bank-account-details.interface.d.ts.map