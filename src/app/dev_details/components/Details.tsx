import { DetailCard } from "./DetailCard";

type detailInfo = {
  imgPath: string;
  title: string;
  notes: string;
  isLR: "L" | "R";
};

export const Details = (props: { datas: detailInfo[] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pb-14 text-lg">Details</div>
      <div className="flex flex-col gap-10">
        {props.datas.map((data) => {
          return (
            <DetailCard
              data={data}
              isLR={data.isLR}
              key={data.imgPath}
            ></DetailCard>
          );
        })}
      </div>
    </div>
  );
};
