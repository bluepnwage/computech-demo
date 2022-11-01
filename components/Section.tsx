import type { ReactNode } from "react";
interface PropTypes {
  children: ReactNode;
  bg?: string;
}
export function Section({ children, bg }: PropTypes) {
  return <section className={`flex flex-col items-center mb-20 ${bg ? bg : ""}`}>{children}</section>;
}
