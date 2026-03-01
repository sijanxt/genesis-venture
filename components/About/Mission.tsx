export function Mission() {
  return (
    <div className="w-full min-h-screen pt-7 bg-[#e9e7e0]   px-5">
      <div className="border-t flex border-b  h-screen border-blue-900">
        <div className="uppercase w-200  relative h-full font-[GT50] text-sm text-blue-900  border-r border-blue-900">
          <p className="p-5">Mission Statement</p>
          <h1 className="absolute font-[PPFONT] text-[225px] bg-[#e9e7e0] whitespace-nowrap top-80 ">
            Our Vision
          </h1>
        </div>
        <div className="w-full flex flex-row-reverse">
          <p className=" flex f w-full font-[GT50] justify-end p-5 text-sm text-blue-900">[OCI.1]</p>
          <div className="flex flex-col h-full justify-between  py-30 pl-10">
            <p className="w-110 tracking-normal text-blue-900 font-[GT50] text-xl ">
                To lead as the most trusted advocate for designers and builders across New York City and beyond, setting the standard for expertise, partnership, and excellence in every project we support.
            </p>
            <p className="w-110 tracking-normal text-blue-900 font-[GT50] text-xl ">
                Our vision is to help shape the landscape and skyline of our never-resting city while respecting and supporting the laws that govern and regulate construction.
            </p>

            </div>
        </div>
      </div>
    </div>
  );
}
