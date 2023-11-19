import { AiFillStar } from "react-icons/ai";

export const SkillCard = (props: { path: string; level: number }) => {
  let colorList = [];
  for (let i = 1; i < 6; i++) {
    if (i <= props.level) {
      colorList[i - 1] = "text-teal-400";
    } else {
      colorList[i - 1] = "text-slate-400";
    }
  }
  return (
    <div>
      <div className="w-20 h-20 rounded-full bg-slate-100 border-dashed border-2 border-slate-200 p-2 overflow-hidden">
        <img src={props.path} className="" alt="" />
      </div>
      <div className="flex justify-between">
        <AiFillStar size={"1rem"} className={colorList[0]} />
        <AiFillStar size={"1rem"} className={colorList[1]} />
        <AiFillStar size={"1rem"} className={colorList[2]} />
        <AiFillStar size={"1rem"} className={colorList[3]} />
        <AiFillStar size={"1rem"} className={colorList[4]} />
      </div>
    </div>
  );
};
