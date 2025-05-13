import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

// Table Definition
export const statuses = pgTable('statuses', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Zod Schemas
export const insertStatusSchema = createInsertSchema(statuses);
export const selectStatusSchema = createSelectSchema(statuses);

// Types
export type Status = z.infer<typeof selectStatusSchema>;
export type NewStatus = z.infer<typeof insertStatusSchema>;
