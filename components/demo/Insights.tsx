import { getInsights } from "../../util/page-speed";
import { AuditsContainer } from "./AuditsContainer";

const computechURL = "http://www.e-computech.com";
const demoURL = "https://computech-demo-bluepnwage.vercel.app";
export async function PageSpeedInsights() {
  const [demoStats, computechStats] = await Promise.all([getInsights(demoURL), getInsights(computechURL)]);
  console.log(`This is the demostats`, demoStats);
  console.log(`This is computech stats`, computechStats);
  if ("error" in demoStats || "error" in computechStats) return <p>There was an error loading the data</p>;

  return (
    <>
      <AuditsContainer computechAudits={computechStats} demoAudits={demoStats} />
    </>
  );
}
