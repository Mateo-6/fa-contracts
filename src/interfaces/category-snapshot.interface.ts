/**
 * Category snapshot embedded in transactions to avoid lookups.
 */
export interface CategorySnapshot {
  id: string;
  name: string;
  icon?: string;
}
