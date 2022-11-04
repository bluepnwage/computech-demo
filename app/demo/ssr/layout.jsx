import { SsrNav } from "../../../components/demo/SsrNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col pt-10 justify-center items-center">
      <div
        style={{ minHeight: 200 }}
        className=" w-3/5 p-4 bg-white text-gray-900 shadow-md ring-1 ring-black ring-opacity-5"
      >
        <SsrNav />
        {children}
      </div>
    </div>
  );
}
