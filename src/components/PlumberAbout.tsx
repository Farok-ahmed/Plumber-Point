import AboutService from "./about/AboutService";
import Blogs from "./Blogs";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";
import bgImg from "/src/assets/bg.png";
const PlumberAbout = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-10">
        <div>
          <div>
            <h1 className="font-primary text-[38px] uppercase font-medium text-[#0E0E0E]">
              Plumber Points Company
            </h1>
            <p className="flex flex-col font-primary text-base text-[#6D6D6D] gap-4 py-5">
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen+ book.
              </span>

              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </span>

              <span>
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </span>
            </p>
          </div>
          <div>
            <AboutService />
          </div>

          <div>
            <div className="relative flex items-center  justify-between h-[400px]">
              <img src={bgImg} className="w-[730px] h-[350px] z-20" alt="" />
              <div className="bg-primary  h-full w-[1100px] absolute top-0 right-0  pr-[120px] pl-[400px]  flex flex-col justify-center">
                <h1 className="text-[44px] font-primary font-bold text-white">
                  Commercial Service
                </h1>
                <p className="text-sm font-primary font-normal text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
            </div>
          </div>
          <OurTeam />
        </div>
      </div>
      <Testimonial />
      <Blogs />
    </div>
  );
};

export default PlumberAbout;
