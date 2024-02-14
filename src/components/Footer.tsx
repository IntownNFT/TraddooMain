import { Link } from "react-router-dom";
import TwitterIcon from "../assets/twitter.svg"
import TelegramIcon from "../assets/telegram.svg"
import DocsIcon from "../assets/docs.svg"

const footerLinks = [
  {
    text: "Documentation",
    link: "/documentation",
  },
  {
    text: "Governance",
    link: "/governance",
  },
  {
    text: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    text: "Cookies Policy",
    link: "/cookies-policy",
  },
  {
    text: "Terms of Use",
    link: "/terms-of-use",
  },
  {
    text: "Disclaimer",
    link: "/disclaimer",
  },
];

const socialLinks = [
    {
        icon: TwitterIcon,
        link: "/"
    },
    {
        icon: TelegramIcon,
        link: "/"
    },
    {
        icon: DocsIcon,
        link: "/"
    },
]

const Footer = () => {
  return (
    <div className="mt-20 px-10 py-3 bg-dark-grey border-t border-t-light-grey flex justify-between items-center">
      <div className="flex font-kanit text-sm">
        {footerLinks.map((link, index) => (
          <Link
            to={link.link}
            key={index}
            className={`flex items-center gap-3 hover:text-blue ${
              index === 0 ? "ml-0" : "ml-4"
            }`}
          >
            {link.text}
            {index === footerLinks.length - 1 ? (
              ""
            ) : (
              <div className="w-1 h-1 rounded-full bg-[#A8A8A8]"></div>
            )}
          </Link>
        ))}
      </div>
      <div className="flex gap-6">
        {
            socialLinks.map((social, index)=> (
                <a href={social.link} target="_blank" rel="noreferrer" key={index}>
                    <img src={social.icon} title={social.link} className="opacity-50 hover:opacity-100" />
                </a>
            ))
        }
      </div>
    </div>
  );
};

export default Footer;
