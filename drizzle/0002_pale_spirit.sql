CREATE TABLE "images" (
	"cuid" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"url" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "post" ALTER COLUMN "published" SET NOT NULL;