import { BlogProps } from "../types/types";

const BlogCard = ({ image, title, excerpt }: BlogProps) => {
  return (
    <>
      <div className="w-full ">
        <img className="w-full  " src={image} alt="" />
        <h1 className="font-primary font-normal text-xl text-black py-2 ">
          {title}
        </h1>
        <p className="font-primary font-normal text-[12px]  text-black">
          {excerpt}
        </p>
      </div>
    </>
  );
};

export default BlogCard;
