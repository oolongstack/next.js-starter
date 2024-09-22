import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/db/schema";
import { serverEnv } from "@/env/server";

// for query purposes
export const client = postgres(serverEnv.DATABASE_URL, {
  max: serverEnv.DB_MIGRATING ? 1 : undefined,
});
const db = drizzle(client, { schema });
export default db;
