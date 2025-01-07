export type history = {
  title: string;
  date: Date;
  attendance: boolean;
};

export const histories: history[] = [
  {
    title: "御阿礼祭 -鈴奈-（第4回）",
    date: new Date(2017, 3, 26),
    attendance: true,
  },
  {
    title: "東方紅楼夢（第13回）",
    date: new Date(2017, 10, 22),
    attendance: true,
  },
  {
    title: "御阿礼祭 -鈴奈-（第5回）",
    date: new Date(2018, 3, 25),
    attendance: false,
  },
  {
    title: "鈴奈幻想絵巻（第1回）",
    date: new Date(2018, 7, 1),
    attendance: true,
  },
  {
    title: "求代目の紅茶会（第8回）",
    date: new Date(2018, 11, 11),
    attendance: true,
  },
  {
    title: "御阿礼祭 -鈴奈-（第6回）",
    date: new Date(2019, 3, 10),
    attendance: true,
  },
  {
    title: "鈴奈幻想絵巻〜二章〜（第2回）",
    date: new Date(2019, 6, 2),
    attendance: true,
  },
  {
    title: "求代目の紅茶会（第9回）",
    date: new Date(2019, 11, 17),
    attendance: true,
  },
  {
    title: "東方名華祭15",
    date: new Date(2021, 7, 18),
    attendance: true,
  },
  {
    title: "求代目の紅茶会（第11回）",
    date: new Date(2022, 9, 11),
    attendance: true,
  },
  {
    title: "第二十回博麗神社例大祭",
    date: new Date(2023, 5, 7),
    attendance: true,
  },
  {
    title: "求代目の紅茶会（第12回）",
    date: new Date(2023, 9, 3),
    attendance: true,
  },
  {
    title: "第十回博麗神社秋季例大祭",
    date: new Date(2023, 11, 12),
    attendance: true,
  },
  {
    title: "求代目の紅茶会（第13回）",
    date: new Date(2024, 9, 23),
    attendance: true,
  },
  {
    title: "御阿礼祭 -鈴奈-",
    date: new Date(2025, 2, 8),
    attendance: true,
  },
  {
    title: "第二回博麗神社例大祭 in 静岡",
    date: new Date(2025, 3, 23),
    attendance: true,
  },
].sort((a, b) => b.date.getTime() - a.date.getTime());
