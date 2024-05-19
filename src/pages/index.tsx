import { css } from "hono/css";
import { Fragment } from "hono/jsx";
import { works } from "../data/work";

export const Index = () => (
  <div class={topStyle}>
    <div id="hidari">
      <h1>コンテンツ</h1>
      <h3>作品</h3>
      <ul>
        {works.map((work) => (
          <Fragment key={work.slug}>
            <a href={`/works/${work.slug}`}>
              <img src={work.imageURL.toString()} alt={work.title} id="seal" />
            </a>
            <li>
              <a href={`/works/${work.slug}`}>{work.title}</a>
            </li>
          </Fragment>
        ))}
      </ul>
      <a href="/works">すべて見る</a>
      <h3>
        <a href="/history">活動履歴</a>
      </h3>
    </div>

    <div id="migi">
      <h3>アカウント一覧</h3>
      <ul>
        <li>
          <a href="https://twitter.com/kelvin27315">Twitter</a>
        </li>
        <li>
          <a href="https://pixiv.me/kelvin27315">pixiv</a>
        </li>
        <li>
          <a href="https://github.com/kelvin27315">GitHub</a>
        </li>
      </ul>
    </div>
  </div>
);

const topStyle = css`
  display: flex;
  #hidari{
    float: left;
    width: 67%;
    padding-left: 3%;
  }
  #migi{
    float: right;
    width: 30%;
  }
`;
