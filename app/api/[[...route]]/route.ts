import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { Hono } from "hono";
import { handle } from "hono/vercel";

import books from "./books";
import authors from "./authors";

const app = new Hono().basePath("/api");

app.route("/books", books).route("/authors", authors);
export const GET = handle(app);
export const POST = handle(app);
