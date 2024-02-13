import Logo from "../../assets/logo.png";
import Button from "../Button";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import MenuLink from "./MenuLink";

const links = [
  {
    page: "Competition",
    path: "/competition",
  },
  {
    page: "Rewards",
    path: "/rewards",
  },
  {
    page: "Rules",
    path: "/rules",
  },
  {
    page: "Contact",
    path: "/contact",
  },
];
const LinkWrapper = () => {
  return (
    <div className="hidden md:flex items-center gap-6 text-base">
      {links.map((link, index) => (
        <MenuLink key={index} link={link} />
      ))}
      <Button path="/" variant="primary" classes="font-inter text-sm">
        Start Trading
      </Button>
    </div>
  );
};


const LogoLink = () => {
  return (
    <a
      href="/"
      className="flex justify-center items-center gap-3 relative z-50"
      title="Toddoo"
    >
      <img
        src={Logo}
        title="Toddoo"
        alt="Toddoo"
        width={26}
        height={26}
        className="bg-light-grey rounded-lg"
      />
      <span className="text-xl">Traddoo</span>
    </a>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-dark-grey border-b-[1px] border-b-light-grey py-4 font-raleway font-bold px-5 2xl:px-0 relative z-50">
      <div className="max-w-[1300px] w-full flex justify-between items-center mx-auto">
        <LogoLink />
        <LinkWrapper />
        <MobileMenu links={links} open={open} setOpen={setOpen} />
      </div>
    </nav>
  );
};

export default Header;
