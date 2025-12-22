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
