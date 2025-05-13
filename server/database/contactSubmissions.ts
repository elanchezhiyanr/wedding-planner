import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

// Table Definition
export const contactSubmissions = pgTable('contact_submissions', {
	id: uuid('id').primaryKey().defaultRandom(),
	name: text('name').notNull(),
	email: text('email').notNull(),
	message: text('message').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Zod Schemas
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions, {
	email: z.string().email(),
});
export const selectContactSubmissionSchema = createSelectSchema(contactSubmissions);

// Types
export type ContactSubmission = z.infer<typeof selectContactSubmissionSchema>;
export type NewContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
