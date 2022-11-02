import { Section } from "./Section";
import engage from "../public/engage-customers.jpg";
import empower from "../public/empower-employees.jpg";
import optimize from "../public/optimize-operations.jpg";
import transform from "../public/transform-business.jpg";
import type { StaticImageData } from "next/image";
import Image from "next/image";

export function DigitalSection() {
  return (
    <Section>
      <header className="mb-7 text-center">
        <h2 className="text-gray-900 text-3xl font-bold mb-5">Drive your digital transformation</h2>
        <p className="text-center">Focus on your areas to unlock value</p>
      </header>
      <div className="flex justify-between gap-5 flex-col md:flex-row  w-11/12">
        <Card image={engage} title={"Engage your customers"} description={"Give them experiences they love"} />
        <Card
          image={empower}
          title={"Empower your employees"}
          description={"Reinvent productivity; a data-driven culture"}
        />
        <Card
          image={optimize}
          title={"Optimize operations"}
          description={"Modernize portfolio, transform processes and skills"}
        />
        <Card
          image={transform}
          title={"Transform Business"}
          description={"Utilize data to produce actionable analysis and enable better decision making"}
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

function Card({ title, description, image }: PropTypes) {
  return (
    <div className="flex flex-col ring-1 ring-black ring-opacity-5 basis-1/4 grow shadow-lg h-96 hover:scale-105 duration-200 ease-out">
      <figure className="basis-2/5 w-full">
        <Image className="w-full h-full" src={image} alt={""} />
      </figure>
      <div className="p-4 flex-col grow justify-between flex">
        <div>
          <h3 className="font-bold text-xl text-gray-900 mb-4">{title}</h3>
          <p className="mb-auto">{description}</p>
        </div>
        <a href={"#"} className="text-indigo-600 w-fit hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
}
