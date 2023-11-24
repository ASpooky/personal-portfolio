type point = {
  title: string;
  note: string;
};

export const PointCard = (props: { point: point }) => {
  return (
    <div className="relative m-7 flex flex-col justify-center items-center rounded-lg bg-slate-100">
      <div className="absolute top-2 left-2 p-2 rounded-full bg-white"></div>
      <div className="absolute top-2 right-2 p-2 rounded-full bg-white"></div>
      <div className="absolute bottom-2 right-2 p-2 rounded-full bg-white"></div>
      <div className="absolute bottom-2 left-2 p-2 rounded-full bg-white"></div>
      <h3 className="underline underline-offset-4 pt-4 pb-8">
        {props.point.title}
      </h3>
      <p className="px-12 pb-12 max-w-4xl tracking-widest">
        {props.point.note}
      </p>
    </div>
  );
};
