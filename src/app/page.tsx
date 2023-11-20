import { Career } from "./component/Career";
import { GitChart } from "./component/GitChart";
import { SkillChart } from "./component/SkillChart";
import { Developments } from "./component/Developments";
import WithApollo from "./component/WithApollo";

const Home = async () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <Career />
      <WithApollo>
        <GitChart />
      </WithApollo>
      <Developments />
      <SkillChart />
    </main>
  );
};

export default Home;
