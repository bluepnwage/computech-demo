export interface PageSpeedResponse {
  lighthouseResult: {
    audits: Audits;
  };
}

type Audits = Record<AuditType, LighthouseAudits>;

export interface LighthouseAudits {
  id: string;
  title: string;
  description: string;
  displayValue: string;
}

export type AuditType =
  | "largest-contentful-paint"
  | "interactive"
  | "speed-index"
  | "first-meaningful-paint"
  | "total-blocking-time"
  | "first-contentful-paint"
  | "cumulative-layout-shift";

const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY!;

const pagespeedURL = "https://pagespeedonline.googleapis.com/";

export async function getInsights(url: string): Promise<PageSpeedResponse> {
  const endpoint = new URL("/pagespeedonline/v5/runPagespeed", pagespeedURL);
  endpoint.searchParams.set("url", url);
  endpoint.searchParams.set("key", apiKey);
  const res = await fetch(endpoint, { cache: "no-store" });
  return res.json();
}

const auditKeys: AuditType[] = [
  "cumulative-layout-shift",
  "first-contentful-paint",
  "first-meaningful-paint",
  "interactive",
  "largest-contentful-paint",
  "speed-index",
  "total-blocking-time"
];

export function filterAudits([key]: any[]) {
  return auditKeys.includes(key);
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
