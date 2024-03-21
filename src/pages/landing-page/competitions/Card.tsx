import { Link } from "react-router-dom";
import BadgeIcon from "../../../assets/landing-page/competitions/competition-badge.svg";
import FireIcon from "../../../assets/landing-page/competitions/fire.svg";
import PeopleIcon from "../../../assets/landing-page/competitions/people.svg";
import ArrowIcon from "../../../assets/landing-page/competitions/right-arrow.svg";

interface HeaderProps {
  name: string;
  isLive: boolean;
}
const CardHeader = ({ name, isLive }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src={BadgeIcon}
          title="traddoo competition"
          alt="traddoo competition"
          width={46}
          height={46}
        />
        <h2 className="font-montserrat font-medium text-xl">{name}</h2>
      </div>
      <div className="font-ubuntu font-bold text-[#BEC0C9] text-lg">
        {isLive ? (
          <p className="text-blue flex items-center gap-1">
            Live{" "}
            <img
              src={FireIcon}
              title="traddoo competition live"
              alt="traddoo competition live"
              width={16}
              height={18}
            />
          </p>
        ) : (
          <p>Ended</p>
        )}
      </div>
    </div>
  );
};

const CardBody = ({ text }: { text: string|undefined }) => {
  return <p className="font-montserrat text-base ml-3 max-w-[333px]">{text && text}</p>;
};

interface Footer {
  contestants: number | string;
  competitionLink: string;
  isLive: boolean;
}
const CardFooter = ({ contestants, competitionLink = "", isLive }: Footer) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src={PeopleIcon}
          width={24}
          height={24}
          title="Traddoo Competition Constestants"
          alt="Traddoo Competition Constestants"
        />
        <h3 className="text-lg font-ubuntu font-medium">
          {contestants} Contestants
        </h3>
      </div>
      {isLive && (
        <Link to={competitionLink}>
          <img
            src={ArrowIcon}
            width={46}
            height={46}
            title="Traddoo Competition Link"
            alt="Traddoo Competition Link"
          />
        </Link>
      )}
    </div>
  );
};

interface Card {
    name: string;
    description?: string;
    contestants: number | string;
    link: string;
    isLive: boolean;
}
const Card = ({name, description, contestants, link, isLive}: Card) => {
  return (
    <div className="w-full max-w-[420px] h-[244px] px-7 py-[30px] bg-dark-grey border border-light-grey rounded-2xl flex flex-col gap-7">
      <CardHeader name={name} isLive={isLive} />
      <CardBody text={description} />
      <CardFooter
        contestants={contestants}
        competitionLink={link}
        isLive={isLive}
      />
    </div>
  );
};

export default Card;
