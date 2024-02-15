interface Card {
    title: string;
    description: string;
    icon: string;
    chip: string;
}
const Card = ({title, description, icon, chip}: Card) => {

  let chipClasses = "";
  if(chip.toLowerCase()==="new") chipClasses = "bg-[#E17AFF] text-[#E17AFF] px-3"
  else if(chip.toLowerCase()==="soon") chipClasses = "bg-[#EFA411] text-[#EFA411] px-4"
  if(chip.toLowerCase()==="now live") chipClasses = "bg-[#4C94FF] text-[#4C94FF] px-3"
  
  let hoverShadow = ""
  if(chip.toLowerCase()==="new") hoverShadow = "hover:shadow-[0px_0px_50px_0px_rgba(225,122,255,0.08)]"
  else if(chip.toLowerCase()==="soon") hoverShadow = "hover:shadow-[0px_0px_50px_0px_rgba(239,164,17,0.08)]"
  if(chip.toLowerCase()==="now live") hoverShadow = "hover:shadow-[0px_0px_50px_0px_rgba(76,148,255,0.08)]"

  return (
    <div className={`w-full max-w-[393px] h-auto sm:h-[204px] p-6 bg-dark-grey border border-light-grey rounded-xl font-inter font-medium flex flex-col gap-3 justify-between items-stretch ${hoverShadow} transition-shadow`}>
      <div className="flex justify-between items-center">
        <img src={icon} alt={title} width={48} height={48} />
        <p className={`bg-opacity-[16%] uppercase text-xs py-1 rounded-lg ${chipClasses}`}>{chip}</p>
      </div>
      <h3 className="text-xl text-[#F4F4F6]">{title}</h3>
      <p className="text-[#969FAF]">{description}</p>
    </div>
  )
}

export default Card
