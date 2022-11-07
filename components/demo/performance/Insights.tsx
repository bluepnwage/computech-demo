"use client";
import { getInsights } from "@util/page-speed";
import { AuditsContainer } from "./AuditsContainer";
import { useState } from "react";
import { ScoreDisplay } from "./ScoreDisplay";
import { SwitchTab } from "./SwitchDevice";
import { IconDeviceMobile, IconDeviceDesktop } from "@tabler/icons";
import useSWR from "swr";

const computechURL = "http://www.e-computech.com";
const demoURL = "https://computech-demo-bluepnwage.vercel.app";

const fetcher = async () => {
  const [computechDesktop, computechMobile, demoDesktop, demoMobile] = await Promise.all([
    getInsights(computechURL, "desktop"),
    getInsights(computechURL, "mobile"),
    getInsights(demoURL, "desktop"),
    getInsights(demoURL, "mobile")
  ]);
  if ("error" in computechDesktop || "error" in computechMobile) throw new Error("Failed to fetch computech stats");
  if ("error" in demoDesktop || "error" in demoMobile) throw new Error("Failed to fetch demo stats");
  return {
    mobile: {
      demo: demoMobile,
      computech: computechMobile
    },
    desktop: {
      demo: demoDesktop,
      computech: computechDesktop
    }
  };
};

export function PageSpeedInsights() {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const { data, error } = useSWR("insights", fetcher, { revalidateIfStale: false, revalidateOnFocus: false });
  if (!data) return <p>Loading data</p>;
  if (error) return <p>{error}</p>;

  const toggleDesktop = () => {
    setDevice("desktop");
  };
  const toggleMobile = () => {
    setDevice("mobile");
  };

  return (
    <>
      <div className="flex w-2/4 mb-5">
        <SwitchTab active={device === "desktop"} Icon={IconDeviceDesktop} device={"Desktop"} onSwitch={toggleDesktop} />
        <SwitchTab active={device === "mobile"} Icon={IconDeviceMobile} device={"Mobile"} onSwitch={toggleMobile} />
      </div>
      <ScoreDisplay
        device={device}
        demoScore={data[device].demo.lighthouseResult.categories.performance.score}
        computechScore={data[device].computech.lighthouseResult.categories.performance.score}
      />
      <AuditsContainer computechAudits={data[device].computech} demoAudits={data[device].demo} />
      <p>
        You can get more in-depth statistics on the official{" "}
        <a target={"_blank"} rel={"noreferrer"} href={"https://pagespeed.web.dev/"} className="text-indigo-600">
          PageSpeed Insights website
        </a>
        .
      </p>
    </>
  );
}
