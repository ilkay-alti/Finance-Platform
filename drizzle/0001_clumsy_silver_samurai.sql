CREATE TABLE "accounts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "accounts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"plaid_id" text,
	"name" text NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;