"use client";
import { useState } from "react";
import { cx } from "@util/cx";
import { PageSpeedResponse, AuditType, LighthouseAudits, formatAudit } from "@util/page-speed";
import { IconExternalLink } from "@tabler/icons";

interface PropTypes {
  computechAudits: PageSpeedResponse;
  demoAudits: PageSpeedResponse;
}

const audits: AuditType[] = [
  "cumulative-layout-shift",
  "first-contentful-paint",
  "interactive",
  "largest-contentful-paint",
  "speed-index",
  "total-blocking-time"
];

export function AuditsContainer({ computechAudits, demoAudits }: PropTypes) {
  const [currentAudit, setCurrentAudit] = useState<AuditType>("cumulative-layout-shift");

  const changeAudit = (auditType: AuditType) => {
    setCurrentAudit(auditType);
  };

  const auditTitle = computechAudits.lighthouseResult.audits[currentAudit].title;
  const auditDescription = computechAudits.lighthouseResult.audits[currentAudit].description;

  return (
    <>
      <div className="grid grid-cols-2 w-3/5 shadow-md bg-white ring-black ring-1 ring-opacity-5 rounded-md mb-4">
        <div className="col-span-full flex justify-between border-b ">
          {audits.map((audit) => {
            return (
              <button
                key={audit}
                className={cx(
                  audit === currentAudit ? " border-b-2 border-indigo-600 text-indigo-600" : " border-white",
                  "font-semibold px-4 py-2 relative first-of-type:border-l-0 last-of-type:border-r-0 active:top-[2px]"
                )}
                onClick={() => changeAudit(audit)}
              >
                {formatAudit(audit)}
              </button>
            );
          })}
        </div>
        <div style={{ minHeight: 120 }} className="col-span-full py-2 border-b text-center">
          <p className="text-xl mb-2 font-semibold">{auditTitle}</p>
          <p className="text-md">{auditDescription.split("[Learn more]")[0]}</p>
        </div>

        <Audit border demo audit={demoAudits.lighthouseResult.audits[currentAudit]} />
        <Audit demo={false} audit={computechAudits.lighthouseResult.audits[currentAudit]} />
        <div className="col-span-full py-2 border-t">
          <p className="text-gray-600 text-sm text-center">
            Powered by{" "}
            <a
              rel={"noreferrer"}
              target={"_blank"}
              href={"https://developers.google.com/speed/docs/insights/v5/get-started"}
              className="text-indigo-600 "
            >
              PageSpeed Insights API <IconExternalLink className="inline ml-[2px]" aria-hidden size={12} />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

interface AuditPropTypes {
  audit: LighthouseAudits;
  demo: boolean;
  border?: boolean;
}

function Audit({ audit, demo, border }: AuditPropTypes) {
  return (
    <>
      <div className={cx("flex flex-col text-center p-4", border ? "border-r" : "")}>
        <p className="text-gray-600 text-xl">{demo ? "Demo" : "Computech"} website</p>
        <p className="text-2xl font-semibold">{audit.displayValue}</p>
      </div>
    </>
  );
}
