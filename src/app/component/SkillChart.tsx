import { SkillCard } from "./SkillCard";

type skill = {
  path: string;
  level: number;
  name: string;
};

const languages: skill[] = [
  { path: "python-icon.png", level: 4, name: "Python" },
  { path: "golang-icon.png", level: 3, name: "Golang" },
  { path: "typescript-icon.png", level: 2, name: "TypeScript" },
  { path: "JavaScript-icon.png", level: 2, name: "JavaScript" },
  { path: "html-icon.png", level: 2, name: "HTML" },
  { path: "css-icon.png", level: 2, name: "CSS" },
];

const frameworks: skill[] = [
  { path: "tailwind-icon.png", level: 3, name: "Tailwind" },
  { path: "nextjs-icon.png", level: 3, name: "Next.js" },
  { path: "echo-icon.png", level: 2, name: "echo" },
  { path: "pytorch-icon.png", level: 2, name: "Pytorch" },
  { path: "django-icon.png", level: 1, name: "Django" },
];

const others: skill[] = [
  { path: "docker-icon.png", level: 2, name: "Docker" },
  { path: "mysql-icon.png", level: 1, name: "Mysql" },
  { path: "Postgresql-icon.png", level: 1, name: "Postgresql" },
];

export const SkillChart = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div>SkillChart</div>
      <div className="grid lg:grid-cols-2 gap-9">
        <div className="flex flex-col justify-center items-center p-5">
          <div>Languages</div>
          <div className="grid grid-cols-4 gap-5">
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
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div>FrameWroks</div>
          <div className="grid grid-cols-4 gap-5">
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
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-5">
          <div>Others</div>
          <div className="grid grid-cols-4 gap-5">
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
