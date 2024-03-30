import { works } from "../../data/work";

export const Index = () => (
  <>
    <h1>作品一覧</h1>
    <h2>漫画</h2>
    <ul>
      <li>憶えていますか</li>
      <li>明日もきっと</li>
      <li>鈴の音 前編</li>
      <li>節季を越える プレビュー版</li>
    </ul>
    <ul>
      {works.map((work) => (
        <>
          <a href={`/works/${work.slug}`}>
            <img src={work.imageURL.toString()} alt={work.title} id="seal" />
          </a>
          <li>
            <a href={`/works/${work.slug}`}>{work.title}</a>
          </li>
        </>
      ))}
    </ul>
  </>
);
