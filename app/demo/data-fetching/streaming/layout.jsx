import { NestedNav } from "../../../../components/demo/NestedNav";

export default function StreamingLayout({ children }) {
  return (
    <div className="flex flex-col pt-10 justify-center items-center">
      <div
        style={{ minHeight: 200 }}
        className=" w-3/5 p-4 bg-white rounded-md text-gray-900 shadow-md ring-1 ring-black ring-opacity-5"
      >
        <NestedNav slug={"streaming"} />
        {children}
      </div>
    </div>
  );
}
