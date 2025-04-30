import companyImg from "/src/assets/image.png";
const Company = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto py-9.5 px-3.5">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/4">
            <img src={companyImg} alt="" />
          </div>
          <div className="w-full md:w-2/4">
            <h1 className="text-[44px] font-bold font-primary text-white">
              Our Company History
            </h1>
            <p className="text-white font-primary font-normal text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <h1 className="text-[38px] pt-[41px] font-light text-white font-primary">
              Trust Our Team of Experts
            </h1>
            <p className="text-white font-primary font-normal text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
