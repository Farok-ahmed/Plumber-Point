import { PlumberProps } from "../types/types";
const TeamCard = ({ image, name }: PlumberProps) => {
  return (
    <div className=" w-full md:w-[266px] ">
      <img src={image} className="w-full" alt="" />
      <div className="px-[26px]">
        <h1 className="flex flex-col items-center justify-center bg-primary font-medium text-lg font-primary text-white rounded-md py-2.5">
          {name}
          <span>Plumber</span>
        </h1>
      </div>
    </div>
  );
};

export default TeamCard;
