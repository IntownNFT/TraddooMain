const FormButton = ({
  type,
  text,
  classes,
}: {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
  classes: string;
}) => {
  return (
    <button
      type={type}
      className={`w-full bg-blue font-rubik font-semibold text-base py-3 rounded-lg hover:bg-opacity-80 transition-all ${classes}`}
    >
      {text}
    </button>
  );
};

export default FormButton;
