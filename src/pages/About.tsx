import Breadcrumb from "../components/Breadcrumb";
import PlumberAbout from "../components/PlumberAbout";

const About = () => {
  return (
    <div>
      <Breadcrumb
        title="About us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book"
      />
      <PlumberAbout />
    </div>
  );
};

export default About;
