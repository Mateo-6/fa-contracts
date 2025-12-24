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
  /** Array of Expo Push Tokens associated with the user's devices */
  expoPushTokens?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
