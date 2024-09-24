import { css } from "hono/css";
import { Fragment } from "hono/jsx";
import { useRequestContext } from "hono/jsx-renderer";
import { socialAccounts } from "../data/socialAccount";

export const Header = () => {
  const c = useRequestContext();
  const path = new URL(c.req.url).pathname;

  return (
    <header class={headerStyle}>
      <h1 class="title">
        <a href="/">七単位</a>
      </h1>
      <nav class="main-nav">
        <ul>
          <li class={path === "/" ? "active" : undefined}>
            <a href="/">Home</a>
          </li>
          <li class={path === "/works" ? "active" : undefined}>
            <a href="/works">Works</a>
          </li>
          <li class={path === "/history" ? "active" : undefined}>
            <a href="/history">History</a>
          </li>
        </ul>
      </nav>
      <ul class="social-icons">
        {socialAccounts.map((account) => (
          <Fragment key={account.name}>
            <li>
              <a
                href={account.url.toString()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class={iconStyle(account.imageURL, account.isIconSVG)} />
              </a>
            </li>
          </Fragment>
        ))}
      </ul>
    </header>
  );
};

const headerStyle = css`
  display: flex;
  align-items: center;
  padding: 0.4rem 0;
  margin-bottom: 2em;
  background-color: #6cc5ed;
  .title{
    flex-grow: 1;
    margin: 0;
    text-wrap: nowrap;
    a{
      margin: 0 1em;
    }
  }
  .main-nav ul{
    display: flex;
    gap: 1.2rem;
    margin: 0;
    li{
      font-weight: bold;
      font-size: 1.2rem;
      :hover {
        opacity: 0.7;
      }
    }
    .active a {
      opacity: 0.6;
    }
  }
  .social-icons {
    display: flex;
    gap: 1.1rem;
    padding: 0;
    margin: 0 1.5rem;
    :hover {
      opacity: 0.7;
    }
    &::before {
      width: 1px;
      height: 1.6rem;
      background-color: whitesmoke;
      content: "";
      margin: 0 0.3rem;
    }
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const svgIconStyle = (url: string) => css`
  background-color: #FFFFFF;
  mask-image: url(${url});
  mask-size: contain;
  mask-repeat: no-repeat;
`;

const pngIconStyle = (url: string) => css`
  background-image: url(${url});
  background-size: contain;
  background-repeat: no-repeat;
`;

const iconStyle = (url: string, isIconSVG: boolean) => css`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  ${isIconSVG ? svgIconStyle(url) : pngIconStyle(url)}
`;
