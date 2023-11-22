import { SkillCard } from "./SkillCard";

type skill = {
  path: string;
  level: number;
  name: string;
  notes: string;
};

const languages: skill[] = [
  {
    path: "python-icon.png",
    level: 4,
    name: "Python",
    notes: "研究や講義,個人開発(バックエンド)",
  },
  {
    path: "golang-icon.png",
    level: 3,
    name: "Golang",
    notes: "個人開発(バックエンド)",
  },
  {
    path: "typescript-icon.png",
    level: 2,
    name: "TypeScript",
    notes: "個人開発(フロントエンド)",
  },
  {
    path: "JavaScript-icon.png",
    level: 2,
    name: "JavaScript",
    notes: "講義や個人開発(フロントエンド)",
  },
  {
    path: "html-icon.png",
    level: 2,
    name: "HTML",
    notes: "講義や個人開発",
  },
  {
    path: "css-icon.png",
    level: 2,
    name: "CSS",
    notes: "講義や個人開発",
  },
];

const frameworks: skill[] = [
  { path: "tailwind-icon.png", level: 3, name: "Tailwind", notes: "個人開発" },
  { path: "nextjs-icon.png", level: 3, name: "Next.js", notes: "個人開発" },
  { path: "echo-icon.png", level: 2, name: "echo", notes: "個人開発" },
  { path: "pytorch-icon.png", level: 2, name: "Pytorch", notes: "研究" },
  { path: "django-icon.png", level: 1, name: "Django", notes: "個人開発" },
];

const others: skill[] = [
  { path: "docker-icon.png", level: 2, name: "Docker", notes: "個人開発" },
  { path: "mysql-icon.png", level: 1, name: "Mysql", notes: "個人開発" },
  {
    path: "Postgresql-icon.png",
    level: 1,
    name: "Postgresql",
    notes: "個人開発",
  },
];

export const SkillChart = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-7">
      <h3 className="pt-8 pb-7 text-lg">
        SkillChart
        <span className="absolute p-6 underline underline-offset-2 text-sm">
          ※自己採点のため参考までに
        </span>
      </h3>

      <div className="grid lg:grid-cols-2 gap-9">
        <div className="flex flex-col justify-center items-center p-5">
          <div className="pb-5">Languages</div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
            {languages.map((language) => {
              return (
                <div
                  key={language.name}
                  className="flex flex-col justify-center items-center"
                >
                  <div>{language.name}</div>
                  <div>
                    <SkillCard
                      path={"languages/" + language.path}
                      level={language.level}
                      key={language.path}
                      notes={language.notes}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div className="pb-5">FrameWroks</div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
            {frameworks.map((framework) => {
              return (
                <div
                  key={framework.name}
                  className="flex flex-col justify-center items-center"
                >
                  <div>{framework.name}</div>
                  <div>
                    <SkillCard
                      path={"frameworks/" + framework.path}
                      level={framework.level}
                      key={framework.path}
                      notes={framework.notes}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div className="pb-5">Others</div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
            {others.map((other) => {
              return (
                <div
                  key={other.name}
                  className="flex flex-col justify-center items-center"
                >
                  <div>{other.name}</div>
                  <div>
                    <SkillCard
                      path={"others/" + other.path}
                      level={other.level}
                      key={other.path}
                      notes={other.notes}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
