import { initialPlumbers } from "../libs/data";
import type { Plumber } from "../libs/data.ts";
import TeamCard from "./TeamCard.tsx";
const OurTeam = () => {
  const plumbers: Plumber[] = initialPlumbers;

  return (
    <div>
      <div className="container mx-auto py-[80px]">
        <div>
          <div className="flex flex-col items-center justify-center">
            <div className=" text-center w-full md:w-[983px]">
              <h1 className="text-[#0E0E0E] font-primary font-medium text-3xl pb-4">
                Our Dedicated Team
              </h1>
              <p className="text-[#6D6D6D] font-primary text-sm leading-[21.36px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
                <br />
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-between pt-[40px] ">
            {plumbers.map((plumb) => (
              <TeamCard key={plumb.id} image={plumb.image} name={plumb.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
