import { css } from "hono/css";
import { Fragment } from "hono/jsx";
import { events } from "../data/event";
import { histories } from "../data/history";

export const History = () => (
  <>
    <h1>活動履歴</h1>
    <h2>サークル参加</h2>
    <ul>
      {histories.map((history, i) => (
        <Fragment key={`${i}-${history.title}`}>
          <li>
            {history.date.getFullYear()}年{history.date.getMonth()}月
            {history.date.getDate()}日:{" "}
            {history.attendance ? (
              <>{history.title}</>
            ) : (
              <>
                <s>{history.title}</s>
                欠席
              </>
            )}
          </li>
        </Fragment>
      ))}
    </ul>
    <h2>参加イベント リンク集</h2>
    <ul class={eventsStyle}>
      {events.map((event) => (
        <Fragment key={event.name}>
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
        </Fragment>
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
