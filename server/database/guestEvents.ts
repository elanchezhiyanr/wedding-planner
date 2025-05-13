import { pgTable, uuid, timestamp, boolean, text } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { guests } from './guests';
import { events } from './events';
import { statuses } from './statuses';

// Table Definition
export const guestEvents = pgTable('guest_events', {
	id: uuid('id').primaryKey().defaultRandom(),
	guestId: uuid('guest_id').references(() => guests.id).notNull(),
	eventId: uuid('event_id').references(() => events.id).notNull(),
	statusId: uuid('status_id').references(() => statuses.id).notNull(),
	plusOne: boolean('plus_one').default(false).notNull(),
	dietaryRestrictions: text('dietary_restrictions'),
	notes: text('notes'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Zod Schemas
export const insertGuestEventSchema = createInsertSchema(guestEvents);
export const selectGuestEventSchema = createSelectSchema(guestEvents);

// Types
export type GuestEvent = z.infer<typeof selectGuestEventSchema>;
export type NewGuestEvent = z.infer<typeof insertGuestEventSchema>;
