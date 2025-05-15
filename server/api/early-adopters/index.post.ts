import { db } from '~/server/database/client';
import { earlyAdopters, insertEarlyAdopterSchema } from '~/server/database/earlyAdopters';
import { eq } from 'drizzle-orm';

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		const { email } = body;
		
		// Validate required fields
		if (!email) {
			throw new Error('Email is required');
		}
		
		// Validate with Zod schema
		const validatedData = insertEarlyAdopterSchema.parse({
			email
		});
		
		// Check if email already exists
		const existingUser = await db.select()
			.from(earlyAdopters)
			.where(eq(earlyAdopters.email, email));
		
		if (existingUser.length > 0) {
			return {
				success: true,
				message: 'You are already on our early access list!'
			};
		}
		
		// Insert the data into the early_adopter table using Drizzle ORM
		const result = await db.insert(earlyAdopters)
			.values(validatedData)
			.returning();
		
		return { 
			success: true, 
			message: 'Thank you for joining our early access list!',
			data: result[0] 
		};
	} catch (error) {
		console.error('Error registering for early access:', error);
		
		return { 
			success: false, 
			error: error instanceof Error ? error.message : 'Failed to register for early access'
		};
	}
});
