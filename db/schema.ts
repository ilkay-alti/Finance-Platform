import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("accounts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  userId: text("user_id").notNull(),
});
