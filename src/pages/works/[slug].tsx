import type { Work as WorkType } from "../../data/work";

interface props {
  work: WorkType;
}

export const Work = ({ work }: props) => (
  <>
    <img src={`/static/${work.imageName}`} alt={work.title} />
    <ul>
      <li>Title: {work.title}</li>
      <li>
        初頒布日: {work.date.getFullYear()}年{work.date.getMonth()}月
        {work.date.getDate()}日
      </li>
      <li>
        <a href={work.pixivURL.href}>[pixiv]</a>
      </li>
    </ul>
  </>
);
