interface HeaderProps {
    title: string,
    subtitle: string,
    id?: string,
}
const SectionHeader = ({title, subtitle, id}:HeaderProps) => {
  return (
    <>
      <h2 className="font-raleway font-bold text-5xl text-center -tracking-[2.75px] text-balance leading-[55px]" id={id}>
        {title}
      </h2>
      <p className="font-inter text-lg text-center text-[#A7AFBB] max-w-[670px] mx-auto mb-5" id={id}>
        {subtitle}
      </p>
    </>
  )
}

export default SectionHeader
