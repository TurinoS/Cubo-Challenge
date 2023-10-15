import { LiaCoinsSolid, LiaMedalSolid } from "react-icons/lia";
import { AiOutlineGift, AiOutlineSetting } from "react-icons/ai";
import ServiceDiv from "./ServiceDiv";

export default function Services() {
  return (
    <section className="flex flex-col p-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Serviços</h2>
        <h3 className="text-xl font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
      </div>
      
      <div className="flex flex-wrap pt-4">
        <ServiceDiv icon={<LiaCoinsSolid />} title="Officia deserunt mollit" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
        <ServiceDiv icon={<AiOutlineGift />} title="Officia deserunt mollit" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
        <ServiceDiv icon={<LiaMedalSolid />} title="Officia deserunt mollit" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
        <ServiceDiv icon={<AiOutlineSetting />} title="Officia deserunt mollit" text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." />
      </div>
    </section>
  );
}
