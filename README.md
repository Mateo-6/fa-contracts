# @tu-usuario/finanzapp-contracts

TypeScript contracts and types for FinanzApp domain entities.

**Features:**
- ✅ Pure POJO (Plain Old JavaScript Objects) - no external dependencies
- ✅ Compatible with frontend, backend, and AWS Lambda
- ✅ Zero runtime dependencies - TypeScript types only
- ✅ All IDs use `string` type (no ObjectId or Mongoose dependencies)

## Installation

```bash
npm install @tu-usuario/finanzapp-contracts
```

## Usage

```typescript
import { User, Category, PaymentMethod, Transaction, RecurringExpense } from '@tu-usuario/finanzapp-contracts';
import { PaymentMethodType, CategoryType, TransactionType, RecurringFrequency } from '@tu-usuario/finanzapp-contracts';
```

## Exported Entities

### Interfaces
- `User` - User entity (includes support for Expo Push Tokens for push notifications)
- `Category` - Category entity
- `CategorySnapshot` - Category snapshot embedded in transactions
- `PaymentMethod` - Payment method entity
- `CreditCardDetails` - Credit card details structure
- `BankAccountDetails` - Bank account details structure
- `CashDetails` - Cash details structure
- `Transaction` - Transaction entity
- `RecurringExpense` - Recurring expense entity
- `Notification` - Notification entity for persistent inbox notifications

### Enums
- `PaymentMethodType` - Payment method types (CREDIT_CARD, BANK_ACCOUNT, CASH)
- `BankAccountType` - Bank account types (SAVINGS, CHECKING)
- `CategoryType` - Category types (INCOME, EXPENSE)
- `TransactionType` - Transaction types (INCOME, EXPENSE)
- `RecurringFrequency` - Recurring frequencies (WEEKLY, MONTHLY, YEARLY)
- `NotificationPriority` - Notification priority levels (LOW, MEDIUM, HIGH, URGENT)

### Types
- `PaymentMethodDetails` - Union type for payment method details

## Building

```bash
npm run build
```

## License

ISC
