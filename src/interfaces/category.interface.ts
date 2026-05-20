import { CategoryType } from '../enums/category-type.enum';

/**
 * Category entity representing a classification for transactions.
 */
export interface Category {
  id?: string;
  name: string;
  description?: string | null;
  type: CategoryType;
  color?: string | null;
  icon?: string | null;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
