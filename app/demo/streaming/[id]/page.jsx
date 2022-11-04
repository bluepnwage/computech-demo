import Image from "next/image";
import { fetchBlog, fetchAvatar } from "../../../../util/fetchBlog";
import { Suspense } from "react";

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
        <Avatar params={params} />
      </Suspense>
    </>
  );
}

async function Avatar({ params }) {
  await fetchAvatar(params);
  return (
    <>
      <figure>
        <Image src={"/bluepnwage.jpg"} alt={""} className={"rounded-full mb-2"} width={50} height={50} />
        <figcaption>
          <p>Agis Carty</p>
        </figcaption>
      </figure>
    </>
  );
}

function AvatarLoading() {
  return (
    <figure>
      <div style={{ width: 50, height: 50 }} className="grayscale mb-2  animate-pulse bg-red-500 rounded-full " />
      <figcaption>
        <p className="animate-pulse h-4 grayscale rounded-lg bg-red-500 w-16"></p>
      </figcaption>
    </figure>
  );
}
