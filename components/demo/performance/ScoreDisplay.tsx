"use client";
import { getAuditScoreColor } from "@util/page-speed";
import styles from "./audit.module.css";
import { cx } from "@util/cx";
import { computechURL, demoURL } from "@lib/websites";

interface PropTypes {
  demoScore: number;
  computechScore: number;
}

export function ScoreDisplay({ computechScore, demoScore }: PropTypes) {
  return (
    <>
      <p className="text-xl font-semibold mb-4">Performance Score</p>
      <div className="flex w-3/5 mb-5">
        <AuditScore url={demoURL} score={demoScore} />
        <AuditScore url={computechURL} score={computechScore} />
      </div>
    </>
  );
}

interface AuditScorePropTypes {
  score: number;
  url: string;
}

export function AuditScore({ score, url }: AuditScorePropTypes) {
  const scoreColor = getAuditScoreColor(score);
  return (
    <div className="py-2 basis-2/4 grow text-center">
      <p className={cx(`${styles[scoreColor]}`, "text-2xl font-semibold text-center")}>
        {(score * 100).toFixed(0)}/100
      </p>
      <p className="text-sm text-gray-600">{url}</p>
    </div>
  );
}
