# @mateo-6/fa-contracts

TypeScript contracts and types for FinanzApp domain entities.

**Features:**
- ✅ Pure POJO (Plain Old JavaScript Objects) - no external dependencies
- ✅ Compatible with frontend, backend, and AWS Lambda
- ✅ Zero runtime dependencies - TypeScript types only
- ✅ All IDs use `string` type (no ObjectId or Mongoose dependencies)

## Installation

This package is published to the GitHub Packages registry and scoped as `@mateo-6/fa-contracts`.

### Consumer setup (e.g. the API repo)

Add a `.npmrc` at the consumer's project root with the scope registry and auth token:

```
@mateo-6:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

Then install:

```bash
npm install @mateo-6/fa-contracts
```

The `NPM_TOKEN` environment variable must be available during install (locally, in CI, or as a build-time variable on your hosting platform).

## Usage

```typescript
import { User, Category, PaymentMethod, Transaction, RecurringExpense } from '@mateo-6/fa-contracts';
import { PaymentMethodType, CategoryType, TransactionType, RecurringFrequency } from '@mateo-6/fa-contracts';
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

## Publishing

### Prerequisites

1. A GitHub Personal Access Token (classic) with the `repo`, `write:packages` and `read:packages` scopes.
2. The token exported as `NPM_TOKEN` in your shell:

```bash
export NPM_TOKEN=your-token
```

### First publish (current version, e.g. `1.2.0`)

```bash
npm publish
git tag v1.2.0
git push origin v1.2.0
```

### Semantic version releases

Use the release scripts to bump the version, publish to GitHub Packages, and push the matching git tag in one step. The `prepublishOnly` script rebuilds the package before publishing.

Run these **whenever the contracts change** and you need consumers to pick up the new version:

| Command              | When to use                                                        | Effect                                                              |
| -------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| `npm run release:patch` | Backwards-compatible bug fixes (e.g. `1.2.0` → `1.2.1`)            | Bumps patch version, publishes, creates and pushes tag `v1.2.1`     |
| `npm run release:minor` | New backwards-compatible features (e.g. `1.2.0` → `1.3.0`)         | Bumps minor version, publishes, creates and pushes tag `v1.3.0`     |
| `npm run release:major` | Breaking changes (e.g. `1.2.0` → `2.0.0`)                          | Bumps major version, publishes, creates and pushes tag `v2.0.0`     |

Example:

```bash
npm run release:patch
```

### Bundling a tarball for a local consumer (legacy / fallback)

If a consumer cannot reach the GitHub Packages registry (e.g. offline builds), you can generate a tarball and copy it into the consumer's repo. Run this **only when you are explicitly moving to/backing up the tarball-based workflow**:

```bash
npm run pack:api
```

This builds the package and writes `fa-contracts-<version>.tgz` into `../api/vendor`. The consuming repo then references it as a `file:` dependency and commits the tarball. Prefer the published package over the tarball whenever possible.

> **Note:** `npm version` requires a clean git working tree. Commit or stash pending changes before running a release script.

## License

ISC