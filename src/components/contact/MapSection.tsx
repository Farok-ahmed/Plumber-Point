const MapSection = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="container mx-auto py-[33px] px-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/4">
            <div className="flex flex-col gap-2 pb-[37px]">
              <h1 className="text-lg font-primary font-bold text-primary">
                Contact Us
              </h1>
              <p className="font-primary text-sm font-normal text-black">
                It is a long established fact that a reader will be distracted
                by <br /> the readable content of a page when looking at its
                layout.
              </p>
            </div>
            <div className="pb-6">
              <h1 className="text-sm font-primary font-medium text-primary">
                Business hours:
              </h1>
              <p className="font-primary text-sm font-normal text-black">
                Monday to Saturday 9:30 am - 4:30 pm
              </p>
            </div>
            <div>
              <h1 className="text-sm font-primary font-medium text-primary">
                Address:
              </h1>
              <p className="font-primary text-sm font-normal text-black">
                A-67 south Ex Delhi-11002
              </p>
            </div>
            <div className="py-6">
              <h1 className="text-sm font-primary font-medium text-primary">
                Email
              </h1>
              <p className="font-primary text-sm font-normal text-black">
                abc@abc.com
              </p>
            </div>
            <div>
              <h1 className="text-sm font-primary font-medium text-primary">
                Phone
              </h1>
              <p className="font-primary text-sm font-normal text-black">
                1800 - 458495-4455
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/4 ">
            <img
              src="https://res.cloudinary.com/drukec6k7/image/upload/v1746015035/Screenshot_2020-07-17_at_10.39_1_l6tz05.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
