export const CareerCard = (props: {
  year: string;
  body: string;
  color: string;
}) => {
  return (
    <div className="flex py-1">
      <div className="flex flex-col justify-center items-center">
        <div className="p-1 rounded-full bg-teal-300"></div>
        <div className="h-full w-1 rounded-lg bg-slate-200 relative mt-1"></div>
        <svg
          className="h-8 w-8 text-slate-200"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="5"
          stroke="currentColor"
          fill="none"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <div className="bg-slate-100 p-5 m-1 relative rounded-md w-72 md:w-80">
        <p className="absolute top-0 left-0 bg-white p-1">{props.year}</p>
        <p className="pt-3 pl-6">・ {props.body}</p>
      </div>
    </div>
  );
};
