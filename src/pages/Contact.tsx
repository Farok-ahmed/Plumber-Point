import Blogs from "../components/Blogs";
import Breadcrumb from "../components/Breadcrumb";
import Form from "../components/contact/Form";
import MapSection from "../components/contact/MapSection";

const Contact = () => {
  return (
    <div>
      <Breadcrumb
        title="Contact us"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
      <Form />
      <MapSection />
      <Blogs />
    </div>
  );
};

export default Contact;
