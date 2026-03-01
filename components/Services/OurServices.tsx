interface OurServicesProps {
  title: string;
  description: string;
  imageUrl: string;
}

// TODO: Replace with actual data and images urls
const servicesData: OurServicesProps[] = [
  {
    title: "Code & Zoning Consultation",
    description:
      "At Outsource Consultants, our in-house team of expert consultants tackles the most complex Building, Zoning, Plumbing, and Mechanical Code challenges in New York City.",
    imageUrl: "/image1.jpg",
  },
  {
    title: "Service 2",
    description: "Description for Service 2",
    imageUrl: "/image2.jpg",
  },
  {
    title: "Service 3",
    description: "Description for Service 3",
    imageUrl: "/image3.jpg",
  },
];

export function OurServices() {
  return (
    <div className="w-full min-h-screen pt-7 bg-[#e9e7e0] px-5">
      <div className="border-y border-blue-900 text-blue-900 ">
        <div className="grid grid-cols-[2fr_6fr]">
          <div className="flex flex-col h-full">
            <p className="p-5 uppercase font-[GT50] text-sm">Our Services</p>
            <p className="text-[225px] font-[PPFONT] self-end mr-10 my-18">A</p>
          </div>
          <div className="flex flex-col h-full justify-between border-l border-blue-900 text-blue-900 pl-10 pb-10">
            <p className="flex w-full font-[GT50] justify-end p-5 text-sm">
              [OCI.2]
            </p>
            <p className="uppercase w-100 tracking-normal text-blue-900 font-[GT50] text-sm">
              Navigating city regulatory agencies can seem like an
              insurmountabley task for architects, engineers, owners and
              contractors.
            </p>
            <p className="text-[225px] font-[PPFONT]">Versatile</p>
            <p className="uppercase w-100 tracking-normal text-blue-900 font-[GT50] text-sm self-end">
              From concept to construction, Outsource guides every step—turning
              blueprints into shovel-ready projects
            </p>
          </div>
        </div>
        <div>
          
        </div>
      </div>

      <div className="w-full flex flex-col items-center py-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="group w-full flex flex-col py-10 text-blue-900 md:flex-row items-center hover:bg-[#1925aa] hover:text-white hover:transition-colors hover:duration-300"
          >
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-[PPFONT]">{index + 1}</h1>
            </div>

            <div className="w-full md:w-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <div className="w-full">
              <h2 className="text-2xl font-[PPFONT] mb-3">{service.title}</h2>
              <button className="px-5 py-2 bg-white text-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Read More
              </button>
            </div>

            {/* description */}
            <div className="w-full md:w-1/2 uppercase font-[GT50] text-sm px-10">
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
