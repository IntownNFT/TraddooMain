import Card from "./Card";

interface CardProps {
    icon: string,
    title: string,
    description: string,
}
const Grid = ({cards}:{cards: Array<CardProps>}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-10">
      {cards.map((card, index) => (
        <Card card_info={card} key={index} />
      ))}
    </div>
  );
};

export default Grid
