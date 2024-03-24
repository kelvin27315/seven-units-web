export type Work = {
  slug: string;
  title: string;
  imageName: string;
  date: Date;
  pixivURL: URL;
};

export const works: Work[] = [
  {
    slug: "q",
    title: "Q",
    imageName: "q.jpg",
    date: new Date(2019, 11, 17),
    pixivURL: new URL("https://www.pixiv.net/artworks/77813238"),
  },
  {
    slug: "thinking_akyu_keycap",
    title: "Thinking_Akyu_keycap",
    imageName: "thinking_akyu_keycap.jpg",
    date: new Date(2021, 7, 18),
    pixivURL: new URL("https://www.pixiv.net/artworks/73461733"),
  },
  {
    slug: "thinking_akyu",
    title: "Thinking_Akyu",
    imageName: "thinking_akyu.jpg",
    date: new Date(2019, 3, 10),
    pixivURL: new URL("https://www.pixiv.net/artworks/73461733"),
  },
];
