import { relations } from 'drizzle-orm';
import { groups } from './groups';
import { events } from './events';
import { guests } from './guests';
import { statuses } from './statuses';
import { groupEvents } from './groupEvents';
import { guestEvents } from './guestEvents';

export const groupsRelations = relations(groups, ({ many }) => ({
	groupEvents: many(groupEvents),
}));

export const eventsRelations = relations(events, ({ many }) => ({
	groupEvents: many(groupEvents),
	guestEvents: many(guestEvents),
}));

export const guestsRelations = relations(guests, ({ many }) => ({
	guestEvents: many(guestEvents),
}));

export const statusesRelations = relations(statuses, ({ many }) => ({
	guestEvents: many(guestEvents),
}));

export const groupEventsRelations = relations(groupEvents, ({ one }) => ({
	group: one(groups, {
		fields: [groupEvents.groupId],
		references: [groups.id],
	}),
	event: one(events, {
		fields: [groupEvents.eventId],
		references: [events.id],
	}),
}));

export const guestEventsRelations = relations(guestEvents, ({ one }) => ({
	guest: one(guests, {
		fields: [guestEvents.guestId],
		references: [guests.id],
	}),
	event: one(events, {
		fields: [guestEvents.eventId],
		references: [events.id],
	}),
	status: one(statuses, {
		fields: [guestEvents.statusId],
		references: [statuses.id],
	}),
}));
