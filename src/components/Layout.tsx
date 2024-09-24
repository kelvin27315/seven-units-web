import { Style, css } from "hono/css";
import type { Child } from "hono/jsx";
import { Header } from "./Header";

export const Layout = (props: { children?: Child }) => (
  <html lang="ja" class={globalCSS}>
    <meta charset="urf-8" />
    <Style />
    <title>七単位</title>
    <body>
      <Header />
      <main>{props.children}</main>
      <footer>© 2017-{new Date().getFullYear()} 七単位</footer>
    </body>
  </html>
);

const globalCSS = css`
  body{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0px;
  }
  main{
    flex-grow: 1;
  }
  footer{
    background-color: #EEEEEC;
    text-align: center;
    padding: 1em;
    margin-top: 2em;
  }
  #banner{
    max-width: 200px;
  }
  #seal{
    margin-top: 2em;
    max-width: 200px;
  }
  img{
    width: 50%;
  }
`;
