const FormButton = ({
  type,
  text,
  classes,
  link,
  target
}: {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
  classes?: string;
  link?: string;
  target?: string;
}) => {
  return (
    <a
      type={type}
      className={`w-full bg-blue font-rubik font-semibold text-base py-3 rounded-lg text-center hover:bg-opacity-80 transition-all ${classes}`}
      href={link?link:""}
      target={target}
    >
      {text}
    </a>
  );
};

export default FormButton;
