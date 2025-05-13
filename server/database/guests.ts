import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

// Table Definition
export const guests = pgTable('guests', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	email: text('email'),
	phone: text('phone'),
	address: text('address'),
	notes: text('notes'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Zod Schemas
export const insertGuestSchema = createInsertSchema(guests, {
	email: z.string().email().optional(), // Assuming email is optional but must be valid if provided
	phone: z.string().optional(),
});
export const selectGuestSchema = createSelectSchema(guests);

// Types
export type Guest = z.infer<typeof selectGuestSchema>;
export type NewGuest = z.infer<typeof insertGuestSchema>;
