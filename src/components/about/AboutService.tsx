const AboutService = () => {
  const data: {
    id: number;
    name: string;
    description: string;
  }[] = [
    {
      id: 1,
      name: "Residental Service",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      id: 2,
      name: "Residental Service",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      id: 3,
      name: "Commercial Service",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      id: 4,
      name: "Commercial Service",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      id: 5,
      name: "Maintenance",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
    {
      id: 6,
      name: "Maintenance",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
    },
  ];
  console.log(data);

  return (
    <div className="grid grid-cols-2  items-center justify-between gap-[40px] py-7">
      {data.map((service) => (
        <div key={service.id} className="flex gap-2 ">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="6"
              fill="white"
              stroke="#DD3142"
              stroke-width="3"
            />
          </svg>

          <div>
            <h1 className="font-primary text-sm text-black font-medium">
              {service.name}
            </h1>
            <p className="text-base font-normal text-[#6D6D6D] font-primary leading-[21.36px] max-w-md">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutService;
