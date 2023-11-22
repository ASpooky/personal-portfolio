import { Hero } from "../components/Hero";
import Link from "next/link";

type imgPath = { path: string };

const imgPaths: imgPath[] = [{ path: "shiftLab2.png" }];

const ShiftLab = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen gap-16 pb-40 container">
      <div className="text-lg font-bold">
        <span className="absolute left-5 top-5">
          <Link
            href={"/"}
            className={"text-lg underline underline-offset-4 text-"}
          >
            ← TOP
          </Link>
        </span>
        shiftLab
      </div>
      <Hero imgPath="shiftLab.png"></Hero>
    </main>
  );
};

export default ShiftLab;
