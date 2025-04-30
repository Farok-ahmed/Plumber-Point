import bannerImg from "/src/assets/Component 1.png";

const Banner = () => {
  return (
    <>
      <div className="pt-[48px]">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="w-full md:w-5/12">
              <h1 className="text-[44px] font-extrabold text-black font-secondary uppercase">
                Call us For Any <br />
                <span className="font-medium">Plumbing Needs</span>
              </h1>
              <p className="font-extrabold text-[34px] py-[17px] text-black font-secondary">
                +1800-9938-2839{" "}
              </p>
              <button className="text-base font-normal text-white uppercase font-primary bg-primary rounded-[35px] py-[13px] px-[17px]">
                See All Service
              </button>
            </div>
            <div className="w-full md:w-7/12">
              <img src={bannerImg} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
