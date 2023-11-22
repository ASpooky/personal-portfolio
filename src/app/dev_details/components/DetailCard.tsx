import Image from "next/image";

type detailInfo = {
  imgPath: string;
  notes: string;
  title: string;
};

export const DetailCard = (props: { data: detailInfo; isLR: "L" | "R" }) => {
  if (props.isLR === "L") {
    return (
      <div className="grid grid-cols-2">
        <div className="border-r mr-10 flex justify-center items-center p-4">
          <Image
            src={"/developments/" + props.data.imgPath}
            alt=""
            width={400}
            height={400}
            className={"object-fill w-fit h-fit shadow-sm "}
          ></Image>
        </div>
        <div className="p-10 flex flex-col justify-center items-center tracking-widest max-w-lg mb-10">
          <div className="p-9 underline tracking-normal underline-offset-8">
            {props.data.title}
          </div>
          <div>{props.data.notes}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-2">
        <div className="p-10 flex flex-col justify-center items-center tracking-widest max-w-lg mb-10">
          <div className="p-9 underline tracking-normal underline-offset-8">
            {props.data.title}
          </div>
          <div>{props.data.notes}</div>
        </div>
        <div className="border-l ml-10 flex justify-center items-center p-4">
          <Image
            src={"/developments/" + props.data.imgPath}
            alt=""
            width={400}
            height={400}
            className={"object-fill w-fit h-fit shadow-sm"}
          ></Image>
        </div>
      </div>
    );
  }
};
