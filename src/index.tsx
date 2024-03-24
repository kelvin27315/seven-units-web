import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { ssgParams } from "hono/ssg";
import { Layout } from "./components/Layout";
import { works } from "./data/work";
import { Index } from "./pages";
import { History } from "./pages/history";
import { Index as Works } from "./pages/works";
import { Work } from "./pages/works/[slug]";

const app = new Hono();

app.all(
  "*",
  jsxRenderer(({ children }) => <Layout>{children}</Layout>),
);

app.get("/", (c) => c.render(<Index />));
app.get("/history", (c) => c.render(<History />));
app.get("/works", (c) => c.render(<Works />));

app.get("/works", (c) => {
  return c.render(
    <ul>
      {works.map((work) => {
        return <Work work={work} />;
      })}
    </ul>,
  );
});

app.get(
  "/works/:slug",
  ssgParams(() => works.map((work) => ({ slug: work.slug }))),
  (c) => {
    const slug = c.req.param("slug");
    const work = works.find((work) => work.slug === slug);
    if (!work) {
      return c.redirect("/404");
    }
    return c.render(<Work work={work} />);
  },
);

app.get("/404", (c) => c.notFound());

export default app;
