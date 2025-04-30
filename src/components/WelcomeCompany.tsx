const WelcomeCompany = () => {
  return (
    <div className="my-[80px]">
      <div className="container mx-auto bg-heror bg-cover bg-center bg-no-repeat py-[50px]">
        <div>
          <div className=" w-full md:w-2xl py-[21px]  bg-white/70 px-[50px]">
            <h1 className="font-bold w-full sm:max-w-sm text-[44px] leading-[48px] font-primary">
              Welcome to Plumber Company
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <button className="text-base mt-[31px] font-normal text-white uppercase font-primary bg-primary rounded-[35px] py-[13px] px-[17px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCompany;
