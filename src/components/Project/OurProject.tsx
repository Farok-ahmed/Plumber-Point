const OurProject = () => {
  const data: { id: number; title: string; subTitle: string; image: string }[] =
    [
      {
        id: 1,
        title: "Kitchen Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004111/Rectangle_178_2_xfj9yq.png",
      },
      {
        id: 2,
        title: "Bathroom Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004112/Rectangle_178_1_ke7cfi.png",
      },
      {
        id: 3,
        title: "Kitchen Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004113/Rectangle_178_lfx5jf.png",
      },
      {
        id: 4,
        title: "Kitchen Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004111/Rectangle_178_2_xfj9yq.png",
      },
      {
        id: 5,
        title: "Bathroom Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004112/Rectangle_178_1_ke7cfi.png",
      },
      {
        id: 6,
        title: "Kitchen Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004113/Rectangle_178_lfx5jf.png",
      },
      {
        id: 7,
        title: "Kitchen Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004111/Rectangle_178_2_xfj9yq.png",
      },
      {
        id: 8,
        title: "Bathroom Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004112/Rectangle_178_1_ke7cfi.png",
      },
      {
        id: 9,
        title: "Kitchen Plumbing Project",
        subTitle: "RESIDENTIAL",
        image:
          "https://res.cloudinary.com/drukec6k7/image/upload/v1746004113/Rectangle_178_lfx5jf.png",
      },
    ];
  return (
    <div className="py-14">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className=" text-center w-full md:w-[983px]">
            <h1 className="text-[#0E0E0E] font-primary font-medium text-3xl pb-4 uppercase">
              Our Project
            </h1>
            <p className="text-[#6D6D6D] font-primary text-sm leading-[21.36px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the <br /> industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type <br /> and scrambled it to make a type specimen
              book.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {data.map((project) => (
            <div key={project.id}>
              <img className="w-full" src={project.image} alt="" />
              <h3 className="text-base font-primary text-primary font-medium text-center">
                {project.subTitle}
              </h3>
              <h1 className="text-sm font-primary text-[#222] font-medium text-center">
                {project.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProject;
