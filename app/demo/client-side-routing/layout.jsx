import { Section } from "../../../components/Section";
import Link from "next/link";
import { ClientRoutingNav } from "../../../components/demo/ClientRoutingNav";
export default function ClientRoutingLayout({ children }) {
  return (
    <>
      <Section>
        <div
          style={{ minHeight: 300 }}
          className="bg-white rounded-md shadow-md ring-1 w-3/5 mt-5 flex flex-col justify-between ring-black p-4 ring-opacity-5"
        >
          {children}
          <ClientRoutingNav />
        </div>
      </Section>
    </>
  );
}
