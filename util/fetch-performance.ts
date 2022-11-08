import { getInsights } from "./page-speed";

const computechURL = "http://www.e-computech.com";
const demoURL = "https://computech-demo-bluepnwage.vercel.app";

export async function fetchPerformance(retryCount: number): Promise<any> {
  if (retryCount > 5) throw new Error("Failed to fetch stats. Retry count exceeded");
  const [computechDesktop, computechMobile, demoDesktop, demoMobile] = await Promise.all([
    getInsights(computechURL, "desktop"),
    getInsights(computechURL, "mobile"),
    getInsights(demoURL, "desktop"),
    getInsights(demoURL, "mobile")
  ]);
  if ("error" in computechDesktop || "error" in computechMobile) return await fetchPerformance(retryCount + 1);
  if ("error" in demoDesktop || "error" in demoMobile) return await fetchPerformance(retryCount + 1);
  return {
    mobile: {
      demo: demoMobile,
      computech: computechMobile
    },
    desktop: {
      demo: demoDesktop,
      computech: computechDesktop
    },
    timestamp: new Date()
  };
}
