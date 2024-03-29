import { works } from "../data/work";

export const Index = () => (
  <>
    <div id="hidari">
      <h1>コンテンツ</h1>
      <h3>作品</h3>
      <ul>
        {works.map((work) => (
          <>
            <a href={`/works/${work.slug}`}>
              <img
                src={`/static/${work.imageName}`}
                alt={work.imageName}
                id="seal"
              />
            </a>
            <li>
              <a href={`/works/${work.slug}`}>{work.title}</a>
            </li>
          </>
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
  </>
);
