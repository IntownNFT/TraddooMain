const FormButton = ({
  type,
  text,
}: {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
}) => {
  return (
    <button
      type={type}
      className="w-full bg-blue font-rubik font-semibold text-base py-3 rounded-lg hover:bg-opacity-80 transition-all"
    >
      {text}
    </button>
  );
};

export default FormButton;
