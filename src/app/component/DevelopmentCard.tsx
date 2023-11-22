export const DevelopmentCard = (props: { imgPath: string; notes: string }) => {
  return (
    <div className="rounded-lg border flex flex-col justify-between items-center h-64 w-64 overflow-hidden hover:cursor-pointer hover:scale-105 hover:shadow-md">
      <div className="flex justify-center items-center h-32 w-64 overflow-hidden border-b">
        <img src={"developments/" + props.imgPath} alt="" />
      </div>
      <div className="h-32 w-64 p-3 bg-slate-100">{props.notes}</div>
    </div>
  );
};
