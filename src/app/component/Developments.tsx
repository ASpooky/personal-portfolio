import { DevelopmentCard } from "./DevelopmentCard";

type DevInfo = {
  imgPath: string;
  notes: string;
  title: string;
};

const devs: DevInfo[] = [
  { imgPath: "myPhoto.png", title: "仮", notes: "こんにちは" },
  { imgPath: "myPhoto.png", title: "仮", notes: "こんにちは" },
  { imgPath: "myPhoto.png", title: "仮", notes: "こんにちは" },
  { imgPath: "myPhoto.png", title: "仮", notes: "こんにちは" },
];

export const Developments = () => {
  return (
    <>
      <h3 className="p-10">Developments</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {devs.map((dev) => {
          return (
            <DevelopmentCard
              imgPath={dev.imgPath}
              notes={dev.notes}
              key={dev.title}
            />
          );
        })}
      </div>
    </>
  );
};
