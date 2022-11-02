import { Suspense } from "react";
import { FetchData } from "../../../components/demo/FetchData";
export default function Streaming() {
  return (
    <>
      <p>Streaming</p>
      <Suspense fallback={<p>Loading test component</p>}>
        <FetchData />
      </Suspense>
    </>
  );
}
