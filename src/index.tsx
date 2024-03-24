import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { ssgParams } from "hono/ssg";

const app = new Hono();

app.all(
  "*",
  jsxRenderer(({ children }) => {
    return (
      <html lang="ja">
        <meta charset="urf-8" />
        <link href="/static/style.css" rel="stylesheet" />
        <title>七単位</title>
        <body>
          <header>
            <a href="/">top</a> &nbsp;
            <a href="/foo">foo</a> &nbsp;
            <a href="/posts">posts</a>
          </header>
          <main>{children}</main>
        </body>
      </html>
    );
  }),
);

app.get("/", (c) => {
  return c.render(<h1>Hello Hono🔥</h1>);
});

app.get("/foo", (c) => {
  return c.render(<h1>Foo</h1>);
});

type Post = {
  id: string;
};

const posts: Post[] = [{ id: "hello" }, { id: "morning" }, { id: "night" }];

app.get("/posts", (c) => {
  return c.render(
    <ul>
      {posts.map((post) => {
        return (
          <li>
            <a href={`/posts/${post.id}`}>{post.id}</a>
          </li>
        );
      })}
    </ul>,
  );
});

app.get(
  "/posts/:id",
  ssgParams(() => posts),
  (c) => {
    return c.render(<h1>{c.req.param("id")}</h1>);
  },
);

app.get("/404", (c) => c.notFound());

export default app;
