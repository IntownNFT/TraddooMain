interface HeaderProps {
  title: string;
  subtitle: string;
  titleStyles?: string;
  subtitleStyles?: string;
  id?: string;
}
const SectionHeader = ({
  title,
  subtitle,
  id,
  titleStyles,
  subtitleStyles,
}: HeaderProps) => {
  return (
    <>
      <h2
        className={`font-raleway font-bold text-5xl text-center -tracking-[2.75px] text-balance leading-[55px] ${titleStyles}`}
        id={id}
      >
        {title}
      </h2>
      <p
        className={`font-inter text-lg text-center text-[#A7AFBB] max-w-[670px] mx-auto mb-5 ${subtitleStyles}`}
        id={id}
      >
        {subtitle}
      </p>
    </>
  );
};

export default SectionHeader;
