import { Section } from "@components/Section";
import { ClientRoutingNav } from "@components/demo/ClientRoutingNav";
import type { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

export default function ClientRoutingLayout({ children }: PropTypes) {
  return (
    <>
      <Section>
        <ClientRoutingNav />
        <div
          style={{ minHeight: 300 }}
          className="bg-white rounded-md shadow-md ring-1 w-3/5 mt-5 flex flex-col justify-between ring-black p-4 ring-opacity-5"
        >
          {children}
        </div>
      </Section>
    </>
  );
}
