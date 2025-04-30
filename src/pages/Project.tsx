import Blogs from "../components/Blogs";
import OurProject from "../components/Project/OurProject";
import Testimonial from "../components/Testimonial";
import bgImg from "/src/assets/bg.png";
import projectHero from "/src/assets/hero image.png";
const Project = () => {
  return (
    <div>
      <img src={projectHero} className="w-full" alt="" />
      <OurProject />
      <div className="container mx-auto px-4 py-9">
        <div className="relative flex items-center  justify-between h-[400px]">
          <img src={bgImg} className="w-[730px] h-[350px] z-20" alt="" />
          <div className="bg-primary  h-full w-[1100px] absolute top-0 right-0  pr-[120px] pl-[400px]  flex flex-col justify-center">
            <h1 className="text-[44px] font-primary font-bold text-white">
              Commercial Service
            </h1>
            <p className="text-sm font-primary font-normal text-white">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </div>
      <Testimonial />
      <Blogs />
    </div>
  );
};

export default Project;
