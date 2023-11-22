import { SkillCard } from "@/app/component/SkillCard";

type skill = {
  path: string;
  level: number;
  name: string;
  notes: string;
};

export const UsedSkills = (porps: { skills: skill[] }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-8 text-lg">Used Skill</div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-10">
        {porps.skills.map((skill) => {
          return (
            <SkillCard
              path={skill.path}
              level={skill.level}
              key={skill.path}
              notes={skill.notes}
            />
          );
        })}
      </div>
    </div>
  );
};
