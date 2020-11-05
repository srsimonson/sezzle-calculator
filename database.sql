-- * Create a database named calculator *

CREATE TABLE "calculator_data" (
	"id" SERIAL PRIMARY KEY,
	"expression" VARCHAR(100) NOT NULL,
	"answer" VARCHAR(100) NOT NULL
	);