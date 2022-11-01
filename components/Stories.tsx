import { Section } from "./Section";
import sxmGov from "../public/sxm-gov.jpg";
import tellem from "../public/tellem.jpg";
import comSxm from "../public/com-sxm.jpg";
import nagico from "../public/nagico.jpg";
import Image, { StaticImageData } from "next/image";

export function Stories() {
  return (
    <Section bg="bg-gray-100">
      <header className="text-center mb-10 mt-5">
        <h2 className="font-bold text-3xl mb-5">Testimonials</h2>
        <p>This is how our work brings value to our clients and their customers</p>
      </header>
      <div className="grid-cols-12 grid gap-5 w-11/12 items-stretch mb-10">
        <Card
          image={sxmGov}
          title={"SXM GOV"}
          description={
            "To respond COVID-19 crisis, Sint Maarten government launch a plateform to manage travel movement and impact assessment."
          }
        />
        <Card
          image={tellem}
          title={"TelEm"}
          description={"TelEm improves the performance of its internal operations thanks to hyper-convergence."}
        />
        <Card
          image={comSxm}
          title={"COM de Saint-Martin"}
          description={"COM de Saint-Martin realize a more digital workplace to accelerate its digital transformation."}
        />
        <Card
          image={nagico}
          title={"Nagico"}
          description={
            "Nagico adopts Security Fabric Solution to reorganize and reinforce its security infrastructure."
          }
        />
      </div>
    </Section>
  );
}

interface PropTypes {
  title: string;
  description: string;
  image: StaticImageData;
}

function Card({ description, title, image }: PropTypes) {
  return (
    <div
      style={{ display: "grid", gridTemplateRows: "minmax(150px, min-content)" }}
      className="bg-white shadow-md rounded-md ring-1 ring-black ring-opacity-5 hover:scale-105 duration-200 ease-out  col-span-3 "
    >
      <figure className="bg-gray-900 overflow-hidden rounded-tr-md rounded-tl-md">
        <Image src={image} className="w-full h-full" alt={""} />
      </figure>
      <div className="p-4 flex flex-col justify-between">
        <h3 className="font-bold mb-2 text-xl">{title}</h3>
        <p className="mb-4">{description}</p>
        <a href="#" className="text-indigo-600 w-fit mt-auto">
          Read more
        </a>
      </div>
    </div>
  );
}
