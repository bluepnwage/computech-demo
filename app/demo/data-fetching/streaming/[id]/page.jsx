import { fetchBlog } from "../../../../../util/fetchBlog";
import { Suspense } from "react";
import { Avatar } from "../../../../../components/demo/data-fetching/Avatar";
import { AvatarLoading } from "../../../../../components/demo/data-fetching/AvatarLoading";

export default async function SreamingPage({ params }) {
  const blog = await fetchBlog(params);
  const generatedDate = new Date();
  const date = generatedDate.toLocaleString();
  return (
    <>
      <h2 className="font-bold text-2xl mb-2">{blog.title}</h2>
      <p className="mb-2">{blog.text}</p>
      <p className="mb-2">This page was generated on: {date}</p>
      <Suspense fallback={<AvatarLoading />}>
        <Avatar />
      </Suspense>
    </>
  );
}
