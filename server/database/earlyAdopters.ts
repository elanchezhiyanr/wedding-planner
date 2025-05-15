import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

// Table Definition
export const earlyAdopters = pgTable('early_adopter', {
	id: uuid('id').primaryKey().defaultRandom(),
	email: text('email').notNull().unique(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Zod Schemas
export const insertEarlyAdopterSchema = createInsertSchema(earlyAdopters, {
	email: z.string().email('Please enter a valid email address'),
});
export const selectEarlyAdopterSchema = createSelectSchema(earlyAdopters);

// Types
export type EarlyAdopter = z.infer<typeof selectEarlyAdopterSchema>;
export type NewEarlyAdopter = z.infer<typeof insertEarlyAdopterSchema>;
