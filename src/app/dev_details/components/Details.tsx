import { DetailCard } from "./DetailCard";

type detailInfo = {
  imgPath: string;
  title: string;
  notes: string;
};

export const Details = (props: { datas: detailInfo[] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pb-14 text-lg">Details</div>
      <div className="flex flex-col gap-10 mt-6">
        {props.datas.map((data) => {
          return <DetailCard data={data} key={data.imgPath}></DetailCard>;
        })}
      </div>
    </div>
  );
};
