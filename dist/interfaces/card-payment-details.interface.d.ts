/**
 * Details for a credit card payment transaction.
 * Used when a Transaction has subtype = TransactionSubtype.CARD_PAYMENT.
 */
export interface CardPaymentDetails {
    /** The ID of the credit card being paid (references a PaymentMethod). */
    creditCardId: string;
    /** Whether this payment covers the full current balance of the card. */
    isFullPayment: boolean;
    /** Start date of the billing period this payment covers. */
    billingPeriodStart: Date;
    /** End date of the billing period this payment covers. */
    billingPeriodEnd: Date;
}
//# sourceMappingURL=card-payment-details.interface.d.ts.map