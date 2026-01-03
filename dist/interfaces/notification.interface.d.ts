import { NotificationPriority } from '../enums/notification-priority.enum';
/**
 * Notification entity representing a persistent inbox notification.
 * Supports persistent storage in the database, allowing notifications to be saved for user consultation.
 */
export interface Notification {
    id?: string;
    userId: string;
    title: string;
    body: string;
    priority: NotificationPriority;
    isRead: boolean;
    metadata?: Record<string, any>;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=notification.interface.d.ts.map