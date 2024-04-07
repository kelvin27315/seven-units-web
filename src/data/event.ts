export type Event = {
  name: string;
  url?: URL;
  image?: URL;
};

export const events: Event[] = [
  {
    name: "御阿礼祭 -鈴奈-",
  },
  {
    name: "東方紅楼夢",
    url: new URL("https://koromu-toho.com/"),
    image: new URL("https://koromu-toho.com/image/banner.jpg"),
  },
  {
    name: "鈴奈幻想絵巻",
    url: new URL("https://main-suzuna-gensou.ssl-lolipop.jp/"),
    image: new URL("https://main-suzuna-gensou.ssl-lolipop.jp/banner_s.png"),
  },
  {
    name: "求代目の紅茶会",
    url: new URL("https://ninth-gen-teaparty.info/"),
    image: new URL("https://ninth-gen-teaparty.info/img/banner_akyu.jpg"),
  },
  {
    name: "東方名華祭",
    url: new URL("https://meikasai.com/"),
    image: new URL("https://meikasai.com/img/bn.png"),
  },
].sort((a, b) => a.name.localeCompare(b.name, "ja"));
