import { Hero } from "../components/Hero";
import { Details } from "../components/Details";
import { UsedSkills } from "../components/UsedSkills";
import Link from "next/link";
import { Slides } from "../components/Slides";
import { Points } from "../components/Points";

type detailInfo = {
  imgPath: string;
  notes: string;
  title: string;
};

const detailInfos: detailInfo[] = [
  {
    imgPath: "Coupons2.png",
    title: "SignUP",
    notes:
      "サインアップ時には、店の住所やユーザ情報を同時に入力してもらいます。登録された住所は、マップから地域ごとに発行されているクーポンを表示する際に用います。また、詳細な店舗情報を得るためにGoogleMapにリンクを飛ばしています。",
  },
  {
    imgPath: "Coupons3.png",
    title: "UserInfo Update",
    notes:
      "メールアドレス以外の情報は更新可能です。また、ホームページのURIを設定することで、飲食店のホームページにリンクを飛ばすことが可能になります。",
  },
  {
    imgPath: "Coupons4.png",
    title: "Post Coupon",
    notes:
      "クーポン投稿画面で、新しいクーポンを投稿します。クーポンはタイトルと詳細だけのシンプルなものになっています。",
  },
  {
    imgPath: "Coupons5.png",
    title: "Coupons",
    notes:
      "地図のエリアを選択することでそのエリアの飲食店のクーポンが表示されます。タイトルと詳細のほかに登録されているホームページと住所が表示されます。",
  },
];

type point = {
  title: string;
  note: string;
};

const points: point[] = [
  {
    title: "チーム開発 : フロントエンド開発",
    note: "本プロダクトの開発はゼミ仲間と2人で行いました。私の主な作業領域はフロントエンドでTypeScriptとNextjs、Tailwind CSSを用いて開発を行いました。",
  },
  {
    title: "UI/UXの改善",
    note: "デザインの知識がないながらも、ユーザ目線に立って使いやすいプロダクトになるように試行錯誤しました。例えば、クーポンをエリアごとに選択できるようにSVGの地図を活用したことやユーザ情報の変更時に変更点を分かりやすく示すなど工夫しました。",
  },
  {
    title: "SPA",
    note: "ネイティブアプリケーションのような使用性にしたかったためSPA(シングルページアプリケーション)を採用しました。ReactやNext.jsの仕様に従いながら、アプリケーションに存在するストレスをできるだけ排除するようにしました。",
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
        <span className="absolute left-4 md:left-8 right-0">
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
      <Slides>
        <Details datas={detailInfos}></Details>
        <Points points={points}></Points>
      </Slides>
    </main>
  );
};

export default Coupons;
