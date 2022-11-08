import { NestedNav } from "@components/demo/NestedNav";
import type { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
}

export default function StreamingLayout({ children }: PropTypes) {
  return (
    <div className="flex flex-col pt-10 justify-center items-center">
      <div
        style={{ minHeight: 200 }}
        className=" w-3/5 p-4 bg-white rounded-md text-gray-900 shadow-md ring-1 ring-black ring-opacity-5 mb-20"
      >
        <NestedNav slug={"streaming"} />
        {children}
      </div>
    </div>
  );
}
