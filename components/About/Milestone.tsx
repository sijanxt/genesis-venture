import Image from "next/image";

const milestones = [
  {
    year: "1993",
    title: "Outsource Established",
    image: "/image1.png",
  },
  {
    year: "1995",
    title: "First Major Project",
    image: "/image2.png",
  },
  {
    year: "2000",
    title: "Global Expansion",
    image: "/image3.png",
  },
  {
    year: "2005",
    title: "Award-Winning Innovation",
    image: "/image4.png",
  },
  {
    year: "2010",
    title: "New Headquarters Opened",
    image: "/image5.png",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    image: "/image6.png",
  },
  {
    year: "2005",
    title: "Award-Winning Innovation",
    image: "/image4.png",
  },
];

function MilestoneItem({
  year,
  title,
  image,
}: {
  year: string;
  title: string;
  image: string;
}) {
  return (
    <div className="flex flex-col ml-10 mt-20 w-120 overflow-hidden">
      <div className="relative w-96 h-70">
        <Image src={image} alt={title} fill />
        <div className="absolute inset-0 bg-blue-900 opacity-50" />{" "}
        {/* Blue overlay */}
      </div>
      <div className="font-[PPFONT] text-blue-900">
        <h1 className="text-[170px] leading-none bg-[#e9e7e0] w-100 relative -left-15 pl-15">
          {year}
        </h1>
        <p className="text-3xl uppercase font-[GT50]">{title}</p>
      </div>
    </div>
  );
}

export default function Milestone() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-5 bg-[#e9e7e0] px-5 pt-7">
      <div className="flex justify-between">
        <p className="uppercase text-blue-900">Milestones</p>
        <p className="uppercase text-blue-900">[OCI.2]</p>
      </div>
      <div className="grid w-full min-h-[150vh] grid-cols-3">
        {milestones.map((milestone, index) => {
          const isLastItem = index === milestones.length - 1;
          const isOdd = milestones.length % 2 !== 0;
          const randomOffset = index % 2 === 0 ? "mt-10" : "-mt-10"; // Add random vertical offset

          return (
            <div
              key={index}
              className={`w-1/3 h-full flex flex-col py-10 justify-between border-l border-blue-900 ${
                isLastItem && isOdd
                  ? "col-span-3 justify-self-center"
                  : randomOffset
              }`}
            >
              <MilestoneItem
                year={milestone.year}
                title={milestone.title}
                image={milestone.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
