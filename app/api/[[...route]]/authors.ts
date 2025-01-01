import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json("List author"));
app.post("/", (c) => c.json("Create author", 201));
app.get("/:id", (c) => c.json(`Get author ${c.req.param("id")}`));

export default app;
