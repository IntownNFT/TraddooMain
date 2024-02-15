import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

interface menu_link {
  page: string;
  path: string;
}
const MenuLink = ({ link, setOpen }: { link: menu_link; setOpen?: (open:boolean)=>void }) => {
  useGSAP(() => {
    if(!document.querySelector("#link")) return;
    gsap.fromTo(
      "#link",
      {
        y: 10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: 0.1,
        duration: 0.2,
      }
    );
  });
  return (
    <Link
      to={link.path}
      className="text-[#A8A8A8] hover:text-white transition-colors"
      id="link"
      onClick={()=>setOpen ? setOpen(false):""}
    >
      {link.page}
    </Link>
  );
};

export default MenuLink;
