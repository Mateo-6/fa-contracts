import { BudgetPeriod } from '../enums/budget-period.enum';

/**
 * Budget entity representing a spending limit for a category or globally.
 */
export interface Budget {
  id?: string;
  userId: string;
  name: string;
  amount: number;
  currency: string;
  period: BudgetPeriod;
  /** ObjectId of the category this budget applies to. null means global (all expense categories). */
  categoryId: string | null;
  startDate: Date;
  /** Computed from startDate + period. */
  endDate: Date;
  /** Denormalized running total of expenses within this budget's period and category. */
  spent: number;
  isActive: boolean;
  rollover: boolean;
  /** Percentage thresholds at which push alerts are sent. Default: [80, 100]. */
  alertThresholds: number[];
  /** Tracks which thresholds have already been alerted in the current period. */
  alertsSent: number[];
  createdAt?: Date;
  updatedAt?: Date;
}
