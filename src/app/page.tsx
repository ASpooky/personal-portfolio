import { GitChart } from "./component/GitChart";
import { SkillChart } from "./component/SkillChart";
import WithApollo from "./component/WithApollo";

const Home = async () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <WithApollo>
        <GitChart />
      </WithApollo>
      <SkillChart />
    </main>
  );
};

export default Home;
