import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface button {
  path: string;
  variant: "primary" | "secondary";
  classes?: string;
  children: string | JSX.Element;
}
const Button = ({ path, variant, classes, children }: button) => {
    useGSAP(()=> {
        gsap.fromTo("#get-started", {
            opacity: 0
        }, {
            opacity: 1,
            delay: 1.2,
            duration: 0.1,
        })
    })
  return (
    <Link
      to={path}
      className={`${
        variant === "primary" ? "bg-blue" : "bg-white"
      } px-3.5 py-2 rounded-lg hover:bg-opacity-50 transition-colors ${classes}`}
      id="get-started"
    >
      {children}
    </Link>
  );
};

export default Button;
