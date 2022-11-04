import Image from "next/image";
import { fetchAvatar, fetchBlog } from "../../../../../util/fetchBlog";

export default async function Page({ params }) {
  const blog = await fetchBlog(params);
  const generatedDate = new Date();
  const date = generatedDate.toLocaleString();
  return (
    <>
      <h2 className="text-gray-900 text-2xl font-bold mb-2 text-center">{blog?.title}</h2>
      <p className="mb-4">{blog?.text}</p>
      <p className="mb-2">This page was generated on: {date}</p>
      <Avatar />
    </>
  );
}

async function Avatar() {
  const avatar = await fetchAvatar();
  return (
    <figure>
      <Image className="rounded-full" src={avatar} width={50} height={50} alt={""} />
      <figcaption>
        <p>Agis Carty</p>
      </figcaption>
    </figure>
  );
}
