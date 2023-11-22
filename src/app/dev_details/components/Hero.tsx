import Image from "next/image";
export const Hero = (props: { imgPath: string }) => {
  return (
    <div className="relative w-screen h-96 flex bg-slate-200 justify-center max-w-7xl">
      <div className="w-4/5 h-fit md:h-full overflow-y-auto flex justify-center items-start md:overflow-y-scroll shadow-lg rounded-lg mt-10 max-h-96">
        <Image
          src={"/developments/" + props.imgPath}
          alt={""}
          width={500}
          height={500}
          className="flex-1 h-auto object-cover"
          priority={true}
        ></Image>
      </div>
    </div>
  );
};
