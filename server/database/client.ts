import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

// Get connection string from environment variables
const connectionString = process.env.DATABASE_URL || '';

// Create postgres connection pool
const pool = new Pool({
	connectionString,
});

// Create drizzle database instance
export const db = drizzle(pool);
