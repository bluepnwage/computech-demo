import { StreamingNav } from "../../../components/demo/StreamingNav";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col pt-10 justify-center items-center">
      <div style={{ minHeight: 200 }} className=" w-3/5 p-4 bg-gray-50 shadow-md ring-1 ring-black ring-opacity-5">
        <StreamingNav />
        {children}
      </div>
    </div>
  );
}
