export async function FetchData() {
  await delay(1000 * 10);
  return (
    <>
      <p>Hello there</p>
    </>
  );
}

async function delay(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
