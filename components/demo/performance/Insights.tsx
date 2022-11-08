"use client";
import { AuditsContainer } from "./AuditsContainer";
import { useState } from "react";
import { ScoreDisplay } from "./ScoreDisplay";
import { SwitchTab } from "./SwitchDevice";
import { IconDeviceMobile, IconDeviceDesktop, IconExternalLink } from "@tabler/icons";
import type { PerformanceData } from "@util/page-speed";
interface PropTypes {
  data: PerformanceData;
}

export function PageSpeedInsights({ data }: PropTypes) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

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
        demoScore={data[device].demo.lighthouseResult.categories.performance.score}
        computechScore={data[device].computech.lighthouseResult.categories.performance.score}
      />
      <AuditsContainer computechAudits={data[device].computech} demoAudits={data[device].demo} />
      <p className="mb-2 font-semibold">
        Last updated: <time className="font-normal">{data.timestamp}</time>
      </p>
      <p>
        You can get more in-depth statistics on the official{" "}
        <a target={"_blank"} rel={"noreferrer"} href={"https://pagespeed.web.dev/"} className="text-indigo-600">
          PageSpeed Insights website
          <IconExternalLink className="inline ml-[2px]" size={12} aria-hidden />
        </a>
        .
      </p>
    </>
  );
}
