import { Style, css } from "hono/css";
import type { Child } from "hono/jsx";

export const Layout = (props: { children?: Child }) => (
  <html lang="ja" class={globalCSS}>
    <meta charset="urf-8" />
    <Style />
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
      <footer>© 2017-{new Date().getFullYear()} 七単位</footer>
    </body>
  </html>
);

const globalCSS = css`
  body{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  *{
    margin: 0px;
  }
  header{
    background-color: #6cc5ed;
    padding-top: 10px;
    margin-bottom: 2em;
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
  #title a{
    margin-left: 1em;
    text-decoration: none;
    color: #ffffff;
  }
  nav ul{
    list-style: none;
    padding: 0;
  }
  nav ul li{
    float: left;
    width: 33.33%;
    font-weight: bold;
    text-align: center;
    line-height: 2.5em;
  }
  h3{
    margin-top: 1em;
  }
  nav ul li a{
    text-decoration: none;
    color: #ffffff;
    display: block;
  }
  #item-index{
    background-color: #0a76fc;
  }
  #item-works{
    background-color: #06307a;
  }
  #item-history{
    background-color: #5b57E0;
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
