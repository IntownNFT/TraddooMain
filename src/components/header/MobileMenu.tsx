import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../Button";
import { useRef } from "react";
import MenuLink from "./MenuLink";

interface menu_link {
  page: string;
  path: string;
}
interface MobileMenuInterface {
  links: Array<menu_link>;
  open: boolean;
  setOpen: (open: boolean) => void;
}
const MobileMenu = ({ links, open, setOpen }: MobileMenuInterface) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if(!menuRef.current) return;
    gsap.fromTo(
      menuRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "easein",
        duration: 0.5,
      }
    );
    if(!document.querySelector("#get-started")) return;
    gsap.fromTo(
      "#get-started",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.2,
        duration: 0.1,
      }
    );
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="block md:hidden" id="mob_menu">
      <button
        type="button"
        title="menu"
        className="relative z-50"
        onClick={handleClick}
      >
        <span className="material-symbols-rounded text-2xl">
          {!open ? "menu" : "close"}
        </span>
      </button>
      {open && (
        <div
          className={`fixed px-5 pt-20 inset-0 bg-black flex flex-col justify-start items-start gap-4 text-3xl`}
          ref={menuRef}
          id="mob_menu_open"
        >
          {links.map((link, index) => (
            <MenuLink key={index} link={link} setOpen={setOpen} />
          ))}
          <Button path="/" variant="primary" id="get-started" classes="font-inter text-xl mt-5">
            Start Trading
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
