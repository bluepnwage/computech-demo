import { fetchAvatar } from "@util/fetchBlog";
import Image from "next/image";


export async function Avatar() {
  await fetchAvatar();
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
