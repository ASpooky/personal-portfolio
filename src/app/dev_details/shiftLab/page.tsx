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
    imgPath: "shiftLab3.png",
    title: "Sign Up & Login",
    notes:
      "サインアップには、メールアドレスとパスワードを用います。SignUpの文字の横の双方向矢印を押すことでLoginフォームとの切り替えができます。また、ログイン時もメールアドレスとパスワードを用います。",
  },
  {
    imgPath: "shiftLab2.png",
    title: "Workspace",
    notes:
      "バイト先の登録には、バイト先の名前と基本時給と早朝手当・深夜手当を登録することができます。また、カレンダー上に表示されるシフトを色で識別できるようにするため、バイト別に色を選択できるようになっています。バイト先の削除もここで行います。",
  },
];

type point = {
  title: string;
  note: string;
};

const points: point[] = [
  {
    title: "個人開発 : フルスタック",
    note: "バックエンドにはGo言語、フロントエンドにはTypeScriptを用いて開発を行いました。",
  },
  {
    title: "クリーンアーキテクチャ",
    note: "バックエンドでは、これまで意識しなかったアーキテクチャに気を使いながら開発を行いました。このプロダクトでは、自分で使いやすいように機能をどんどん追加しようと考えていたため、クリーンアーキテクチャを採用しました。アーキテクチャそのものを学びながらの開発には苦労しましたが、プロダクト完成後のコードが整理されていて改善が行いやすと感じました。",
  },
  {
    title: "UI/UXの改善",
    note: "デザインの知識がないながら、ユーザ目線に立って追加やすいプロダクトになるように試行錯誤しました。",
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

const ShiftLab = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-16 pb-40">
      <div className="pt-20 pb-8 font-bold text-xl">
        <span className="absolute left-8 -translate-y-1 right-0">
          <Link
            href={"/"}
            className={
              "text-lg text-sky-500 hover:text-xl hover:text-sky-800 duration-75"
            }
          >
            ← TOP
          </Link>
        </span>
        ShiftLab
      </div>
      <Hero imgPath="shiftLab.png"></Hero>
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

export default ShiftLab;
