import { Link } from "react-router-dom";
import TwitterIcon from "../assets/twitter.svg";
import InstaIcon from "../assets/instagram.svg";
import DiscordIcon from "../assets/discord.svg";

const footerLinks = [
  {
    text: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    text: "Cookies Policy",
    link: "/cookie-policy",
  },
  {
    text: "Terms of Use",
    link: "/terms-of-use",
  },
  // {
  //   text: "Documentation",
  //   link: "/documentation",
  // },
  // {
  //   text: "Governance",
  //   link: "/governance",
  // },
  // {
  //   text: "Disclaimer",
  //   link: "/disclaimer",
  // },
];

const socialLinks = [
  {
    icon: TwitterIcon,
    link: "https://twitter.com/Traddoo",
  },
  {
    icon: InstaIcon,
    link: "https://www.instagram.com/traddoo/",
  },
  {
    icon: DiscordIcon,
    link: "https://discord.gg/tZRhvbVNN6",
  },
];

const Footer = () => {
  return (
    <div className="mt-20 px-10 py-3 bg-dark-grey border-t border-t-light-grey flex justify-between items-center flex-wrap gap-8">
      <div className="flex font-kanit text-sm flex-wrap gap-3">
        {footerLinks.map((link, index) => (
          <Link
            to={link.link}
            key={index}
            className={`flex items-center hover:text-blue`}
          >
            {index === 0 ? (
              ""
            ) : (
              <div className="w-1 h-1 rounded-full bg-[#A8A8A8] mx-4 hidden sm:block"></div>
            )}
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex gap-6">
        {socialLinks.map((social, index) => (
          <a href={social.link} target="_blank" rel="noreferrer" key={index}>
            <img
              src={social.icon}
              title={social.link}
              width={20}
              height={20}
              alt={`Traddoo Social Media ${social.link}`}
              className="w-5 h-5 opacity-50 hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
