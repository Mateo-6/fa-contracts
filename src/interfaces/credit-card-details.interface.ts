/**
 * Credit card details structure.
 */
export interface CreditCardDetails {
  card_number: string; // Last 4 digits (required)
  cut_off_day: number; // 1-31: Day of the month when the statement closes
  payment_day: number; // 1-31: Payment due date
  credit_limit: number;
  current_balance: number;
}
