import { Hero } from "../components/Hero";
import { Details } from "../components/Details";
import { UsedSkills } from "../components/UsedSkills";
import Link from "next/link";

type detailInfo = {
  imgPath: string;
  notes: string;
  isLR: "L" | "R";
  title: string;
};

const detailInfos: detailInfo[] = [
  {
    imgPath: "Coupons2.png",
    isLR: "L",
    title: "SignUP",
    notes:
      "サインアップ時には、店の住所やユーザ情報を同時に入力してもらいます。登録された住所は、マップから地域ごとに発行されているクーポンを表示する際に用います。また、詳細な店舗情報を得るためにGoogleMapにリンクを飛ばしています。",
  },
  {
    imgPath: "Coupons3.png",
    isLR: "R",
    title: "UserInfo Update",
    notes:
      "メールアドレス以外の情報は更新可能です。また、ホームページのURIを設定することで、飲食店のホームページにリンクを飛ばすことが可能になります。",
  },
];

type skill = {
  path: string;
  level: number;
  name: string;
  notes: string;
};

const skills: skill[] = [
  {
    path: "languages/golang-icon.png",
    level: 3,
    name: "Golang",
    notes: "Golang",
  },
  {
    path: "languages/typescript-icon.png",
    level: 2,
    name: "TypeScript",
    notes: "TypeScript",
  },
  {
    path: "frameworks/nextjs-icon.png",
    level: 3,
    name: "Next.js",
    notes: "Next.js",
  },
  {
    path: "others/Postgresql-icon.png",
    level: 1,
    name: "Docker",
    notes: "Postgresql",
  },
];

const Coupons = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-16 pb-40">
      <div className="pt-20 pb-8 font-bold text-xl">
        <span className="absolute left-8 top-4">
          <Link
            href={"/"}
            className={
              "text-lg text-sky-500 hover:text-xl hover:text-sky-800 duration-75"
            }
          >
            ← TOP
          </Link>
        </span>
        Coupons
      </div>
      <Hero imgPath="Coupons.png"></Hero>
      <div className="p-10">
        <UsedSkills skills={skills}></UsedSkills>
      </div>
      <div>
        <Details datas={detailInfos}></Details>
      </div>
    </main>
  );
};

export default Coupons;
