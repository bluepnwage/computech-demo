"use client";
import { useState } from "react";
import { cx } from "../../util/cx";
import { PageSpeedResponse, AuditType, LighthouseAudits, formatAudit } from "../../util/page-speed";

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
  const [currentAudit, setCurrentAudit] = useState<AuditType>("largest-contentful-paint");

  const changeAudit = (auditType: AuditType) => {
    setCurrentAudit(auditType);
  };

  const auditTitle = computechAudits.lighthouseResult.audits[currentAudit].title;
  const auditDescription = computechAudits.lighthouseResult.audits[currentAudit].description;

  return (
    <>
      <div className="grid grid-cols-2 w-3/5 shadow-md ring-black ring-1 ring-opacity-5 rounded-md">
        <div className="col-span-full flex justify-between ">
          {audits.map((audit) => {
            return (
              <button
                key={audit}
                className={cx(
                  audit === currentAudit ? "bg-indigo-600 text-gray-100" : "bg-white text-gray-900",
                  "font-semibold px-4 py-2 rounded-md border relative first-of-type:border-l-0 last-of-type:border-r-0 active:top-[2px]"
                )}
                onClick={() => changeAudit(audit)}
              >
                {formatAudit(audit)}
              </button>
            );
          })}
        </div>
        <div className="col-span-full border-b">
          <p>{auditTitle}</p>
          <p>{auditDescription}</p>
        </div>
        <Audit demo audit={demoAudits.lighthouseResult.audits[currentAudit]} />
        <Audit demo={false} audit={computechAudits.lighthouseResult.audits[currentAudit]} />
      </div>
    </>
  );
}

interface AuditPropTypes {
  audit: LighthouseAudits;
  demo: boolean;
}

function Audit({ audit, demo }: AuditPropTypes) {
  return (
    <>
      <div className="flex flex-col ">
        <p>{demo ? "Demo" : "Computech"} website</p>
        <p>{audit.displayValue}</p>
      </div>
    </>
  );
}

function ChangeAudit() {
  return <></>;
}
