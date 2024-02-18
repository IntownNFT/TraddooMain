import { Link } from "react-router-dom";

interface button {
  path: string;
  variant: "primary" | "secondary";
  classes?: string;
  id?: string;
  children: string | JSX.Element;
}
const Button = ({
  path,
  variant,
  classes,
  id,
  children,
}: button) => {
  return (
    <Link
      to={path}
      className={`${
        variant === "primary" ? "bg-blue" : "bg-white"
      } text-center px-3.5 py-2 rounded-lg hover:bg-opacity-50 transition-colors ${classes}`}
      id={id}
    >
      {children}
    </Link>
  );
};

export default Button;
