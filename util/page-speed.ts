import { computechURL, demoURL } from "@lib/websites";
import { formatdate } from "./formatDate";

export interface PageSpeedResponse {
  lighthouseResult: {
    audits: Audits;
    categories: Categories;
  };
}

type Audits = Record<AuditType, LighthouseAudits>;
type Categories = Record<AuditCategory, CategoryAudit>;
export interface LighthouseAudits {
  id: string;
  title: string;
  description: string;
  displayValue: string;
}

type AuditCategory = "performance" | "accessibility" | "seo";

interface CategoryAudit {
  id: string;
  title: string;
  score: number;
}

export type AuditType =
  | "largest-contentful-paint"
  | "interactive"
  | "speed-index"
  | "first-meaningful-paint"
  | "total-blocking-time"
  | "first-contentful-paint"
  | "cumulative-layout-shift";

export type Strategy = "desktop" | "mobile";

const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY!;

const pagespeedURL = "https://pagespeedonline.googleapis.com/";

async function getInsights(url: string, strategy: Strategy = "desktop"): Promise<PageSpeedResponse> {
  const endpoint = new URL("/pagespeedonline/v5/runPagespeed", pagespeedURL);
  endpoint.searchParams.set("url", url);
  endpoint.searchParams.set("key", apiKey);
  endpoint.searchParams.set("strategy", strategy);
  const res = await fetch(endpoint);
  return res.json();
}

export function formatAudit(audit: AuditType) {
  switch (audit) {
    case "cumulative-layout-shift":
      return "CLS";
    case "first-contentful-paint":
      return "FCP";
    case "interactive":
      return "TTI";
    case "largest-contentful-paint":
      return "LCP";
    case "speed-index":
      return "SI";
    case "total-blocking-time":
      return "TBT";
  }
}

export function getAuditScoreColor(score: number) {
  if (score >= 0.9) {
    return "good";
  } else if (score >= 0.5 && score <= 0.89) {
    return "average";
  } else {
    return "poor";
  }
}

export interface PerformanceData {
  mobile: {
    demo: PageSpeedResponse;
    computech: PageSpeedResponse;
  };
  desktop: {
    demo: PageSpeedResponse;
    computech: PageSpeedResponse;
  };
  timestamp: string;
}

export async function fetchPerformance(retryCount: number): Promise<PerformanceData> {
  if (retryCount > 4) throw new Error("Failed to fetch stats. Retry count exceeded");
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
    timestamp: formatdate(new Date())
  };
}
