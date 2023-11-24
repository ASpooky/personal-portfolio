import { PointCard } from "./PointCard";

type point = {
  title: string;
  note: string;
};

export const Points = (props: { points: point[] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pb-14 text-lg">Points</div>
      <div className="flex flex-col gap-10">
        {props.points.map((point) => {
          return <PointCard point={point} key={point.title}></PointCard>;
        })}
      </div>
    </div>
  );
};
