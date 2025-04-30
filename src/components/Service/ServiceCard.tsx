const ServiceCard = ({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  return (
    <div>
      <div className="flex  items-center flex-col text-center shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)] bg-white border rounded-md border-white px-5 py-8">
        <img src={image} alt="" />
        <h1 className="text-sm  text-black font-primary font-medium">
          {title}
        </h1>
        <p className="text-[12px] text-[#6D6D6D] leading-[16.02px] max-w-[200px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
