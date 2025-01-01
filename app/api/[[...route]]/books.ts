import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.json("List books"));
app.post("/", (c) => c.json("Create a book", 201));
app.get("/:id", (c) => c.json(`Get book ${c.req.param("id")}`));

export default app;
