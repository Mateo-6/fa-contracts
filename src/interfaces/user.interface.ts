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
