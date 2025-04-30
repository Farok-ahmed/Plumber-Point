import Banner from "../components/Banner";
import Blogs from "../components/Blogs";
import Company from "../components/Company";
import OurTeam from "../components/OurTeam";
import PlumberPoint from "../components/PlumberPoint";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import WelcomeCompany from "../components/WelcomeCompany";
import image4 from "/src/assets/image 4.png";
const Home = () => {
  return (
    <>
      <div>
        <div>
          <Banner />
          <Service />
          <WelcomeCompany />
          <Company />
          <PlumberPoint />
          <div>
            <img src={image4} className="w-full" alt="" />
          </div>
          <OurTeam />
          <Testimonial />
          <Blogs />
        </div>
      </div>
    </>
  );
};

export default Home;
