import { migrate } from "drizzle-orm/postgres-js/migrator";

import config from "@/../drizzle.config";
import { serverEnv } from "@/env/server";

import db, { client } from ".";

if (!serverEnv.DB_MIGRATING) {
  throw new Error("You must set DB_MIGRATING ti true.");
}
await migrate(db, { migrationsFolder: config.out! });
await client.end();
