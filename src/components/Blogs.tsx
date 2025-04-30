import BlogItems from "./BlogItems";

const Blogs = () => {
  return (
    <div>
      <div className="container mx-auto py-[67px] px-4">
        <div>
          <h1 className="font-primary text-3xl font-medium uppercase text-[#0E0E0E]">
            our recent blogs
          </h1>
          <BlogItems />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
