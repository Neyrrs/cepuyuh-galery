"use client";

import useBreakpoint from "@/Hooks/useBreakpoint";
import PrimaryCard from "@/Components/Fragments/Cards/PrimaryCard";
import ActionCard from "@/Components/Fragments/Cards/ActionCard";
import GaleryAttention from "@/Components/Fragments/Attentions/GaleryAttention";

export default function Home() {
  const displayPictures = [
    {
      title: "Hari batik",
      image: "Batikday.jpg",
    },
    {
      title: "Oh some",
      image: "Ohsome.jpg",
    },
    {
      title: "LDKS",
      image: "LDKS.jpg",
    },
    {
      title: "MSL",
      image: "MSL.jpg",
    },
    {
      title: "Last jumseh",
      image: "lapangan.jpg",
    },
  ];
  const characterCard = [
    {
      icon: "/globe.svg",
      title: "Relationship",
      desc: "We are so close to called as a best friend"
    },
    {
      icon: "/globe.svg",
      title: "Cheerfull",
      desc: "We are so cheerfull to called as a best friend"
    },
    {
      icon: "/globe.svg",
      title: "Relationship",
      desc: "We are so close to called as a best friend"
    },
    {
      icon: "/globe.svg",
      title: "Cheerfull",
      desc: "We are so cheerfull to called as a best friend"
    },
  ]
  const breakpoint = useBreakpoint();

  return (
    <div className="flex pt-14 flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="landingPage flex-col px-10 justify-center gap-2 flex w-full h-100 md:h-120">
          <div className="bg-[#143D60]/50 w-fit h-fit p-3 backdrop-blur-md rounded-md">
            <h1 className="text-white text-3xl md:text-5xl font-semibold">
              Welcome
            </h1>
            <h2 className="text-white text-2xl md:text-3xl font-medium">
              This is us, Cepuyuh!
            </h2>
          </div>
        </div>
      </div>

      <div className={`flex-wrap h-fit flex gap-x-2 gap-y-4 md:gap-5 px-5 ${breakpoint >= 750 ? "justify-between" : "justify-evenly"}`}>
        {characterCard.map((item, index) => (
          <PrimaryCard
            key={index}
            icon={item.icon}
            width={25}
            height={25}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>

      <div className="bg-white h-fit w-full px-5">
        <div className="flex-wrap flex gap-8 py-10 md:gap-8 flex-col">
          <h1 className="text-3xl font-semibold">Our Gallery</h1>
          <div className={`w-fit flex flex-wrap gap-2 md:gap-8 gap-y-3 ${breakpoint <= 750 ? "justify-center" : ""}`}>
            {displayPictures.map((items, index) => (
              <ActionCard
                key={index}
                image={items.image}
                judul={items.title}
                description="Gallery description"
              />
            ))}
            {breakpoint > 1350 && <GaleryAttention />}
          </div>
        </div>
      </div>
    </div>
  );
}
