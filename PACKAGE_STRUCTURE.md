# FinanzApp Contracts - Package Structure

This document contains all the file contents for the `@tu-usuario/finanzapp-contracts` package.

## 📁 Directory Structure

```
finanzapp-contracts/
├── src/
│   ├── enums/
│   │   ├── payment-method-type.enum.ts
│   │   ├── bank-account-type.enum.ts
│   │   ├── category-type.enum.ts
│   │   ├── transaction-type.enum.ts
│   │   ├── recurring-frequency.enum.ts
│   │   └── index.ts
│   ├── interfaces/
│   │   ├── user.interface.ts
│   │   ├── category.interface.ts
│   │   ├── category-snapshot.interface.ts
│   │   ├── payment-method.interface.ts
│   │   ├── credit-card-details.interface.ts
│   │   ├── bank-account-details.interface.ts
│   │   ├── cash-details.interface.ts
│   │   ├── transaction.interface.ts
│   │   ├── recurring-expense.interface.ts
│   │   └── index.ts
│   ├── types/
│   │   ├── payment-method-details.type.ts
│   │   └── index.ts
│   └── index.ts
├── package.json
├── tsconfig.json
├── README.md
├── .gitignore
└── .npmignore
```

---

## 📄 File Contents

### src/enums/payment-method-type.enum.ts

```typescript
/**
 * Payment method types supported by the system.
 */
export enum PaymentMethodType {
  CREDIT_CARD = 'CREDIT_CARD',
  BANK_ACCOUNT = 'BANK_ACCOUNT',
  CASH = 'CASH',
}
```

### src/enums/bank-account-type.enum.ts

```typescript
/**
 * Bank account type enumeration.
 */
export enum BankAccountType {
  SAVINGS = 'SAVINGS',
  CHECKING = 'CHECKING',
}
```

### src/enums/category-type.enum.ts

```typescript
/**
 * Category type enumeration.
 */
export enum CategoryType {
  INCOME = 'income',
  EXPENSE = 'expense',
}
```

### src/enums/transaction-type.enum.ts

```typescript
/**
 * Transaction type enumeration.
 */
export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}
```

### src/enums/recurring-frequency.enum.ts

```typescript
/**
 * Frequency options for recurring expenses.
 */
export enum RecurringFrequency {
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}
```

### src/enums/index.ts

```typescript
export { PaymentMethodType } from './payment-method-type.enum';
export { BankAccountType } from './bank-account-type.enum';
export { CategoryType } from './category-type.enum';
export { TransactionType } from './transaction-type.enum';
export { RecurringFrequency } from './recurring-frequency.enum';
```

---

### src/interfaces/user.interface.ts

```typescript
/**
 * User entity representing an application user.
 */
export interface User {
  id?: string;
  username: string;
  name: string;
  password?: string;
  phone: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}
```

### src/interfaces/category.interface.ts

```typescript
import { CategoryType } from '../enums/category-type.enum';

/**
 * Category entity representing a classification for transactions.
 */
export interface Category {
  id?: string;
  name: string;
  description?: string | null;
  type: CategoryType;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
```

### src/interfaces/category-snapshot.interface.ts

```typescript
/**
 * Category snapshot embedded in transactions to avoid lookups.
 */
export interface CategorySnapshot {
  id: string;
  name: string;
  icon?: string;
}
```

### src/interfaces/payment-method.interface.ts

```typescript
import { PaymentMethodType } from '../enums/payment-method-type.enum';
import { PaymentMethodDetails } from '../types/payment-method-details.type';

/**
 * Payment method domain entity.
 */
export interface PaymentMethod {
  id?: string;
  userId: string;
  name: string;
  type: PaymentMethodType;
  currency: string;
  details: PaymentMethodDetails;
  createdAt?: Date;
  updatedAt?: Date;
}
```

### src/interfaces/credit-card-details.interface.ts

```typescript
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
```

### src/interfaces/bank-account-details.interface.ts

```typescript
import { BankAccountType } from '../enums/bank-account-type.enum';

/**
 * Bank account details structure.
 */
export interface BankAccountDetails {
  bank_name: string;
  account_number: string; // Last 4 digits (required)
  account_type: BankAccountType;
}
```

### src/interfaces/cash-details.interface.ts

```typescript
/**
 * Cash details structure.
 */
export interface CashDetails {
  amount: number; // Current cash amount (required)
}
```

### src/interfaces/transaction.interface.ts

```typescript
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
```

### src/interfaces/recurring-expense.interface.ts

```typescript
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
```

### src/interfaces/index.ts

```typescript
export { User } from './user.interface';
export { Category } from './category.interface';
export { CategorySnapshot } from './category-snapshot.interface';
export { PaymentMethod } from './payment-method.interface';
export { CreditCardDetails } from './credit-card-details.interface';
export { BankAccountDetails } from './bank-account-details.interface';
export { CashDetails } from './cash-details.interface';
export { Transaction } from './transaction.interface';
export { RecurringExpense } from './recurring-expense.interface';
```

---

### src/types/payment-method-details.type.ts

```typescript
import { CreditCardDetails } from '../interfaces/credit-card-details.interface';
import { BankAccountDetails } from '../interfaces/bank-account-details.interface';
import { CashDetails } from '../interfaces/cash-details.interface';

/**
 * Union type for all payment method details.
 */
export type PaymentMethodDetails = CreditCardDetails | BankAccountDetails | CashDetails;
```

### src/types/index.ts

```typescript
export type { PaymentMethodDetails } from './payment-method-details.type';
```

---

### src/index.ts

```typescript
// Enums
export * from './enums';

// Interfaces
export * from './interfaces';

// Types
export * from './types';
```

---

### package.json

```json
{
  "name": "@tu-usuario/finanzapp-contracts",
  "version": "1.0.0",
  "description": "TypeScript contracts and types for FinanzApp domain entities",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "tsc",
    "build:clean": "rm -rf dist && npm run build",
    "prepublishOnly": "npm run build:clean"
  },
  "keywords": [
    "finanzapp",
    "contracts",
    "types",
    "typescript",
    "domain"
  ],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "devDependencies": {
    "typescript": "^5.9.3"
  },
  "peerDependencies": {},
  "peerDependenciesMeta": {}
}
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "lib": ["ES2020"],
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "moduleResolution": "node"
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "**/*.test.ts",
    "**/*.spec.ts"
  ]
}
```

### README.md

```markdown
# @tu-usuario/finanzapp-contracts

TypeScript contracts and types for FinanzApp domain entities.

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
- `User` - User entity
- `Category` - Category entity
- `CategorySnapshot` - Category snapshot embedded in transactions
- `PaymentMethod` - Payment method entity
- `CreditCardDetails` - Credit card details structure
- `BankAccountDetails` - Bank account details structure
- `CashDetails` - Cash details structure
- `Transaction` - Transaction entity
- `RecurringExpense` - Recurring expense entity

### Enums
- `PaymentMethodType` - Payment method types (CREDIT_CARD, BANK_ACCOUNT, CASH)
- `BankAccountType` - Bank account types (SAVINGS, CHECKING)
- `CategoryType` - Category types (INCOME, EXPENSE)
- `TransactionType` - Transaction types (INCOME, EXPENSE)
- `RecurringFrequency` - Recurring frequencies (WEEKLY, MONTHLY, YEARLY)

### Types
- `PaymentMethodDetails` - Union type for payment method details

## Building

```bash
npm run build
```

## License

ISC
```

### .gitignore

```
node_modules/
dist/
*.log
.DS_Store
.env
.env.local
```

### .npmignore

```
src/
tsconfig.json
node_modules/
*.log
.DS_Store
.env
.env.local
.gitignore
```

---

## 🚀 Next Steps

1. Copy all files to your new repository
2. Update the `author` field in `package.json` if needed
3. Update the package name `@tu-usuario/finanzapp-contracts` to your desired npm scope/name
4. Run `npm install` to install dependencies
5. Run `npm run build` to compile the TypeScript code
6. Publish to npm registry if needed
