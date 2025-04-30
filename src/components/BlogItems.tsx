import blogs from "../libs/blog";
import { BlogProps } from "../types/types";
import BlogCard from "./BlogCard";

const BlogItems = () => {
  const data: BlogProps[] = blogs;
  return (
    <div className="flex md:flex-row flex-col gap-[140px] items-center justify-center py-7">
      {data.slice(0, 3).map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
};

export default BlogItems;
