import { css } from "hono/css";
import { events } from "../data/event";

export const History = () => (
  <>
    <h1>活動履歴</h1>
    <h2>サークル参加</h2>
    <ul>
      <li>2022年09月11日: 求代目の紅茶会（第11回）</li>
      <li>2021年07月18日: 東方名華祭15</li>
      <li>2019年11月17日: 求代目の紅茶会（第9回）</li>
      <li>2019年06月02日: 鈴奈幻想絵巻〜二章〜（第2回）</li>
      <li>2019年03月10日: 御阿礼祭 -鈴奈-（第6回）</li>
      <li>2018年11月11日: 求代目の紅茶会（第8回）</li>
      <li>2018年07月01日: 鈴奈幻想絵巻（第1回）</li>
      <li>
        <s>2018年03月25日: 御阿礼祭 -鈴奈-（第5回）</s>欠席
      </li>
      <li>2017年10月22日: 東方紅楼夢（第13回）</li>
      <li>2017年03月26日: 御阿礼祭 -鈴奈-（第4回）</li>
    </ul>
    <h2>参加イベント リンク集</h2>
    <ul class={eventsStyle}>
      {events.map((event) => (
        <li>
          {event.url ? (
            <div>
              <a href={event.url.toString()}>{event.name}</a>
              {event.image && (
                <a href={event.url.toString()} class={"banner"}>
                  <img src={event.image?.toString()} alt={event.name} />
                </a>
              )}
            </div>
          ) : (
            <div>{event.name}</div>
          )}
        </li>
      ))}
    </ul>
  </>
);

const eventsStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1em;
  li{
    div{
      display: flex;
      text-align: center;
      align-items: center;
      gap: 1.5em;
      .banner{
        img{
          width: 200px;
        }
      }
    }
  }
`;
