import Image from "next/image";

type detailInfo = {
  imgPath: string;
  notes: string;
  title: string;
};

export const DetailCard = (props: { data: detailInfo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="md:border-r flex justify-center items-center p-4 order-last md:order-1">
        <Image
          src={"/developments/" + props.data.imgPath}
          alt=""
          width={400}
          height={400}
          className={"object-fill w-fit h-fit rounded-sm p-4"}
        ></Image>
      </div>
      <div className="p-10 flex flex-col justify-center items-center tracking-widest max-w-lg mb-10 order-1 md:order-last border-b md:border-none ml-4">
        <div className="p-9 underline tracking-normal underline-offset-8">
          {props.data.title}
        </div>
        <div>{props.data.notes}</div>
      </div>
    </div>
  );
};
