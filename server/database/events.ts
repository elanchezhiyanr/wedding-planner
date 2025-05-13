import { pgTable, uuid, text, timestamp, boolean } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

// Table Definition
export const events = pgTable('events', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description'),
	date: timestamp('date').notNull(),
	location: text('location'),
	isActive: boolean('is_active').default(true).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Zod Schemas
export const insertEventSchema = createInsertSchema(events, {
	date: z.date(), // Assuming date should be a JS Date object for insertion
});
export const selectEventSchema = createSelectSchema(events);

// Types
export type Event = z.infer<typeof selectEventSchema>;
export type NewEvent = z.infer<typeof insertEventSchema>;
