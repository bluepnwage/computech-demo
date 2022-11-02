import { fetchBlog } from "../../../../util/fetchBlog";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function Page({ params }: { params: any }) {
  const blog = await fetchBlog(params);
  const generatedDate = new Date();
  const date = generatedDate.toLocaleString();

  return (
    <>
      <h2 className="text-gray-900 text-2xl font-bold mb-2 text-center">{blog?.title}</h2>
      <p className="mb-4">{blog?.text}</p>
      <p>This page was generated on: {date}</p>
    </>
  );
}
