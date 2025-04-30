import about from "/src/assets/about.png";
const Breadcrumb = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center pt-[50px] sm:pt-[125px] pb-[48px]"
        style={{
          backgroundImage: `linear-gradient(to right, #DD3142 0.03%, rgba(196, 196, 196, 0.00) 141.61%), url(${about})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="">
            <h1 className="text-[#EEFF06] text-[44px] font-black font-primary uppercase ">
              {title}
            </h1>
            <p className=" w-full md:max-w-[432px] text-white font-primary text-sm ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
