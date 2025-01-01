import { db } from "@/db";
import { Hono } from "hono";

import { accountsTable } from "@/db/schema";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { HTTPException } from "hono/http-exception";
import { error } from "console";

const app = new Hono().get(
  "/",
  clerkMiddleware(),

  async (c) => {
    const auth = await getAuth(c);

    if (!auth?.userId) {
      throw new HTTPException(401, {
        res: c.json(
          {
            error: "Unauthorized",
          },
          401
        ),
      });
    }

    const data = await db
      .select({
        id: accountsTable.id,
        name: accountsTable.name,
      })
      .from(accountsTable);

    return c.json(data);
  }
);

export default app;
