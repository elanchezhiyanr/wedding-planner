import { db } from '~/server/database/client';
import { contactSubmissions, insertContactSubmissionSchema } from '~/server/database/contactSubmissions';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		const { name, email, message } = body;
		console.log(name, email, message);
		
		// Validate required fields
		if (!name || !email || !message) {
			throw new Error('Name, email, and message are required');
		}
		
		// Validate with Zod schema
		const validatedData = insertContactSubmissionSchema.parse({
			name,
			email,
			message
		});
		
		// Insert the data into the contact_submissions table using Drizzle ORM
		const result = await db.insert(contactSubmissions).values(validatedData).returning();
		
		// Select the inserted data using Drizzle ORM
		const insertedData = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, result[0].id));

		return { 
			success: true, 
			data: insertedData[0] 
		};
	} catch (error) {
		console.error('Error submitting contact form:', error);
		
		return { 
			success: false, 
			error: error instanceof Error ? error.message : 'Failed to submit contact form'
		};
	}
});
