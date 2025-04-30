import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  const data: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      id: 1,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_4_erbzd1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 2,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_2_sk3vxn.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 3,
      title: "Plumbing Service",

      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_4_erbzd1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 4,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_2_sk3vxn.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 5,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_4_erbzd1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 6,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_2_sk3vxn.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 7,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_4_erbzd1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 8,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_2_sk3vxn.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 9,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_4_erbzd1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 10,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_2_sk3vxn.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 11,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_4_erbzd1.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
    {
      id: 12,
      title: "Plumbing Service",
      image:
        "https://res.cloudinary.com/drukec6k7/image/upload/v1745909091/Component_2_sk3vxn.png",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
    },
  ];
  return (
    <div>
      <div className="container mx-auto py-14">
        <div className="flex flex-col items-center justify-center">
          <div className=" text-center w-full md:w-[983px]">
            <h1 className="text-[#0E0E0E] font-primary font-medium text-3xl pb-4">
              Plumber Points
            </h1>
            <p className="text-[#6D6D6D] font-primary text-base leading-[21.36px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-4">
          {data.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
