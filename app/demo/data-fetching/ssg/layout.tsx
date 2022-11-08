import React from "react";
import { NestedNav } from "@components/demo/NestedNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col pt-10 justify-center items-center">
      <div
        style={{ minHeight: 200 }}
        className=" w-3/5 p-4 bg-white rounded-md shadow-md ring-1 text-gray-900 ring-black ring-opacity-5 mb-20"
      >
        <NestedNav slug="ssg" />
        {children}
      </div>
    </div>
  );
}
