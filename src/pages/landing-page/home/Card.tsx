interface CardInfo {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ card_info }: { card_info: CardInfo }) => {
  return (
    <div className="w-full max-w-[542px] h-auto sm:h-48 p-4 bg-dark-grey rounded-lg border border-light-grey flex flex-col justify-center items-start gap-2 hover:shadow-[0px_0px_50px_0px_rgba(54,113,233,0.05)] transition-shadow">
      <div className="bg-[#3862751E] w-8 h-8 p-1 border border-light-grey rounded-[4px] flex items-center justify-center">
        <img src={card_info.icon} title={card_info.title} width={18} height={18} alt="Traddoo Funding Programs" loading="lazy" className="w-auto" />
      </div>
      <h3 className="font-kanit font-semibold text-2xl mt-2">{card_info.title}</h3>
      <p className="font-kanit font-medium text-lg text-[#A8A8A8] max-w-[450px]">{card_info.description}</p>
    </div>
  );
};

export default Card;
