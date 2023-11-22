import { CareerCard } from "./CareerCard";

type CareerItem = {
  year: string;
  body: string;
  color: string;
};

const carees: CareerItem[] = [
  { year: "2001", body: "3月生まれ", color: "slate" },
  { year: "2019", body: "広島市立大学　入学", color: "slate" },
  {
    year: "2022",
    body: "連合学習という機械学習主手法について研究",
    color: "slate",
  },
  {
    year: "2023",
    body: "広島市立大学大学院　進学",
    color: "slate",
  },
  {
    year: "2023",
    body: "web開発に興味を持ち,個人開発や動画教材などで学習開始",
    color: "slate",
  },
  { year: "2025", body: "広島市立大学大学院 卒業予定", color: "slate" },
];

export const Career = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-slate-100"></div>
      <h3 className="pt-8 pb-5 text-lg">Profile</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 w-96 ml-1">
          <img src="myPhoto.png" alt="" />
          <p>※自身の画像をもとに生成しました</p>
        </div>
        <div className="flex flex-col justify-center items-center mr-4">
          <h3 className="py-8">Career</h3>
          {carees.map((item) => {
            return (
              <CareerCard
                year={item.year}
                body={item.body}
                key={item.year}
                color={item.color}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
