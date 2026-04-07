# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
npm install

# Build (compile TypeScript to dist/)
npm run build

# Clean build (removes dist/ first)
npm run build:clean
```

There are no tests or linting configured in this package.

## Architecture

This is a **zero-runtime-dependency** TypeScript package that defines the shared domain contracts for FinanzApp. It is consumed as a GitHub package (`github:Mateo-6/fa-contracts#main`) by the `api` and `fa-worker` modules.

The package is a flat barrel export: `src/index.ts` → `src/enums/index.ts` + `src/interfaces/index.ts` + `src/types/index.ts`.

**Compiled output** (`dist/`) includes `.js`, `.d.ts`, `.d.ts.map`, and `.js.map` files — these are what consumers actually import.

### Current exports

**Enums (7):**
- `PaymentMethodType` — `CREDIT_CARD | BANK_ACCOUNT | CASH`
- `BankAccountType` — `SAVINGS | CHECKING`
- `CategoryType` — `income | expense` (lowercase values, unlike others)
- `TransactionType` — `INCOME | EXPENSE`
- `TransactionSubtype` — subtypes for transactions
- `RecurringFrequency` — `WEEKLY | MONTHLY | YEARLY`
- `NotificationPriority` — `LOW | MEDIUM | HIGH | URGENT`
- `BudgetPeriod` — `WEEKLY | MONTHLY | YEARLY`

**Interfaces (11):** `User`, `Category`, `CategorySnapshot`, `PaymentMethod`, `CreditCardDetails`, `BankAccountDetails`, `CashDetails`, `CardPaymentDetails`, `Transaction`, `RecurringExpense`, `Notification`, `Budget`

**Types (1):** `PaymentMethodDetails` — union of `CreditCardDetails | BankAccountDetails | CashDetails`

### Key design notes

- `CategoryType` values are lowercase strings (`'income'`, `'expense'`), while all other enums use UPPER_SNAKE_CASE values. This is intentional and mirrors the MongoDB schema.
- `Transaction.category` is a `CategorySnapshot` (embedded/denormalized), not a reference ID — this avoids DB lookups at read time.
- `PaymentMethod.details` is polymorphic via `PaymentMethodDetails` union type; callers must narrow by `PaymentMethod.type`.
- `Budget.spent` is a denormalized running total maintained by the API, not computed at query time.
- `Budget.alertThresholds` defaults to `[80, 100]` (percentage) and `alertsSent` tracks which have fired in the current period.

### Adding a new contract

1. Create the file in `src/enums/` or `src/interfaces/` following the existing naming convention (`kebab-case.enum.ts` / `kebab-case.interface.ts`).
2. Export it from the relevant `index.ts` barrel.
3. Run `npm run build:clean` to rebuild `dist/`.
4. Bump the version in `package.json` (consumers reference `#main` via git, so a version bump + push is sufficient).
