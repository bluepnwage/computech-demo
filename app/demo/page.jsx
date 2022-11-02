import { Suspense } from "react";
export default function Test() {
  return (
    <>
      <p>Hello there from the test page</p>
      <Suspense fallback={<p>Fetch data is suspended</p>}>
        <FetchData />
      </Suspense>
    </>
  );
}

async function FetchData() {
  const data = await returnData();
  return (
    <>
      <p>{data}</p>
    </>
  );
}

async function delay(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

async function returnData() {
  await delay(1000 * 3);
  return "Hello there";
}
