ALTER TABLE "user" RENAME TO "users";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "user_email_unique";--> statement-breakpoint
ALTER TABLE "post" DROP CONSTRAINT "post_author_id_user_cuid_fk";
--> statement-breakpoint
ALTER TABLE "post" ADD CONSTRAINT "post_author_id_users_cuid_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("cuid") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");