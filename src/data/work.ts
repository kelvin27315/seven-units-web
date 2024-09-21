export type Work = {
  slug: string;
  title: string;
  imageURL: URL;
  date: Date;
  pixivURL: URL;
};

export const works: Work[] = [
  {
    slug: "tobidashi_akyu",
    title: "飛び出し阿求",
    imageURL: new URL("https://images.seven-units.net/tobidashi_akyu.jpg"),
    date: new Date(2024, 9, 23),
    pixivURL: new URL("https://www.pixiv.net/artworks/122648727"),
  },
  {
    slug: "q",
    title: "Q",
    imageURL: new URL("https://images.seven-units.net/q.jpg"),
    date: new Date(2019, 11, 17),
    pixivURL: new URL("https://www.pixiv.net/artworks/77813238"),
  },
  {
    slug: "thinking_akyu_keycap",
    title: "Thinking_Akyu_keycap",
    imageURL: new URL(
      "https://images.seven-units.net/thinking_akyu_keycap.jpg",
    ),
    date: new Date(2021, 7, 18),
    pixivURL: new URL("https://www.pixiv.net/artworks/73461733"),
  },
  {
    slug: "thinking_akyu",
    title: "Thinking_Akyu",
    imageURL: new URL("https://images.seven-units.net/thinking_akyu.jpg"),
    date: new Date(2019, 3, 10),
    pixivURL: new URL("https://www.pixiv.net/artworks/73461733"),
  },
];
