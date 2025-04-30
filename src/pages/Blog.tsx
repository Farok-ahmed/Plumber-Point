import BlogCard from "../components/BlogCard";
import Blogs from "../components/Blogs";
import Testimonial from "../components/Testimonial";
import blogs from "../libs/blog";
import { BlogProps } from "../types/types";
import bgImg from "/src/assets/bg.png";
const Blog = () => {
  const data: BlogProps[] = blogs;
  return (
    <div>
      <div className="container mx-auto py-3">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-2/4">
            <h1 className="text-[44px] font-primary font-bold text-black">
              Our Blogs
            </h1>
            <p className="text-sm font-primary text-black max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </div>
          <div className="w-full md:w-2/4">
            <img
              className="w-full"
              src="https://res.cloudinary.com/drukec6k7/image/upload/v1746006828/image_4_lxwiux.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-[70px] py-[100px]">
          <div className="w-full md:w-2/4">
            <img
              className="w-full"
              src="https://res.cloudinary.com/drukec6k7/image/upload/v1746008656/bg_zbbois.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-2/4">
            <h1 className="font-primary text-black text-[38px] pb-3.5">
              Lorem Ipsum is simply dummy <br /> text.
            </h1>
            <p className="text-black font-primary text-[12px] font-normal max-w-xl ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <p className="text-black font-primary text-[12px] font-normal max-w-xl py-2.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
            <p className="text-black font-primary text-[12px] font-normal max-w-xl pb-2.5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="text-primary underline font-primary text-base font-normal">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[50px] items-center justify-center py-7">
            {data.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </div>
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

export default Blog;
