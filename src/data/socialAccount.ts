export type SocialAccount = {
  name: string;
  url: URL;
  imageURL: string;
  isIconSVG: boolean;
};

export const socialAccounts: SocialAccount[] = [
  {
    name: "X",
    url: new URL("https://x.com/kelvin27315"),
    imageURL: "/static/x.svg",
    isIconSVG: true,
  },
  {
    name: "GitHub",
    url: new URL("https://github.com/kelvin27315"),
    imageURL: "/static/github.svg",
    isIconSVG: true,
  },
  {
    name: "Pixiv",
    url: new URL("https://pixiv.me/kelvin27315"),
    imageURL: "/static/pixiv.png",
    isIconSVG: false,
  },
];
