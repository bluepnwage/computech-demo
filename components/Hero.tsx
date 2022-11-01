import hero from "../public/hero.jpg";
import Image from "next/image";

export function Hero() {
  return (
    <div
      style={{ height: "80vh" }}
      className=" relative w-full flex flex-col overflow-hidden justify-center bg-black  text-gray-200 px-20 mb-20"
    >
      <div className="w-2/4 flex z-50 flex-col gap-5 items-start">
        <h1 className="font-bold text-5xl ">Get to know Computech</h1>
        <p className="leading-loose text-lg">
          Computech is the Caribbean leading provider of innovative digital and cloud services, governments, public
          sector and businesses solutions and designed-led experiences delivered through the power of the people and the
          Microsoft ecosystem.
        </p>
        <button className="bg-indigo-600 px-6 py-2 text-gray-200 font-semibold rounded-sm">Read more</button>
      </div>
      <Image priority src={hero} alt={""} className="absolute opacity-30 scale-150 top-0 left-0 w-full h-full" />
    </div>
  );
}
