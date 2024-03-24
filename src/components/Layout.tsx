import type { Child } from "hono/jsx";

export const Layout = (props: { children?: Child }) => (
  <html lang="ja">
    <meta charset="urf-8" />
    <link href="/static/style.css" rel="stylesheet" />
    <title>七単位</title>
    <body>
      <header>
        <h1 id="title">
          <a href="/">七単位</a>
        </h1>
        <nav>
          <ul>
            <li id="item-index">
              <a href="/">Home</a>
            </li>
            <li id="item-works">
              <a href="/works">Works</a>
            </li>
            <li id="item-history">
              <a href="/history">History</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </body>
  </html>
);
