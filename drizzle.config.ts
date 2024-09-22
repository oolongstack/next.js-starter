import { defineConfig } from "drizzle-kit";

import { serverEnv } from "@/env/server";

export default defineConfig({
  schema: "./src/db/schema/index.ts",
  dialect: "postgresql",
  out: "./src/db/migrations",
  dbCredentials: {
    url: serverEnv.DATABASE_URL,
  },
});
