"use client";

import { DevelopmentCard } from "./DevelopmentCard";
import Link from "next/link";

type DevInfo = {
  imgPath: string;
  notes: string;
  title: string;
  link: string;
};

const devs: DevInfo[] = [
  {
    imgPath: "Coupons.png",
    title: "クーポンアプリ",
    notes: "広島県内の飲食店を対象に、クーポン発行アプリを作成しました。",
    link: "coupons",
  },
  {
    imgPath: "shiftLab.png",
    title: "シフトラボ",
    notes:
      "バイトのシフトを登録し、年収や月収を見ることができるアプリを作成しました。",
    link: "shiftLab",
  },
];

export const Developments = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="py-8 text-lg">Developments</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
        {devs.map((dev) => {
          return (
            <Link href={"dev_details/" + dev.link} key={dev.title}>
              <div className="flex flex-col justify-center items-center">
                <p className="pb-2 font-sans">- {dev.title} -</p>
                <DevelopmentCard imgPath={dev.imgPath} notes={dev.notes} />
              </div>
            </Link>
          );
        })}
        <div className="flex flex-col justify-center items-center">
          <p className="pb-2 font-sans">- -</p>
          <div className="flex border-2 rounded-lg border-dashed border-slate-300 w-64 h-64 justify-center items-center text-slate-500">
            絶賛開発中
            <svg
              className="h-4 w-4 text-slate-400"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6-6a6 6 0 0 1 -8 -8l3.5 3.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
