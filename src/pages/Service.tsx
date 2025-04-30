import Blogs from "../components/Blogs";
import Breadcrumb from "../components/Breadcrumb";
import OurTeam from "../components/OurTeam";
import ServiceSection from "../components/Service/ServiceSection";
import Testimonial from "../components/Testimonial";

const Service = () => {
  return (
    <div>
      <Breadcrumb
        title="Services"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
      <ServiceSection />
      <OurTeam />
      <Testimonial />
      <Blogs />
    </div>
  );
};

export default Service;
