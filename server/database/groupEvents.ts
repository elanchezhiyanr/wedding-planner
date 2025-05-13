import { pgTable, uuid, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { groups } from './groups';
import { events } from './events';

// Table Definition
export const groupEvents = pgTable('group_events', {
	id: uuid('id').primaryKey().defaultRandom(),
	groupId: uuid('group_id').references(() => groups.id).notNull(),
	eventId: uuid('event_id').references(() => events.id).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Zod Schemas
export const insertGroupEventSchema = createInsertSchema(groupEvents);
export const selectGroupEventSchema = createSelectSchema(groupEvents);

// Types
export type GroupEvent = z.infer<typeof selectGroupEventSchema>;
export type NewGroupEvent = z.infer<typeof insertGroupEventSchema>;
