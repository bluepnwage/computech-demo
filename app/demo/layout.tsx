import { ReactNode } from "react";
import { Sidebar } from "../../components/demo/Sidebar";

interface PropTypes {
  children: ReactNode;
}

export default function Test({ children }: PropTypes) {
  return (
    <>
      <Sidebar />
      <div style={{ minHeight: "calc(100vh - 48px)" }} className="flex bg-gray-50 flex-col items-end">
        <div className="w-4/5 text-gray-900 text-lg">{children}</div>
      </div>
    </>
  );
}
