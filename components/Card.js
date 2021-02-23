import CardMedia from "components/CardMedia";

const Card = ({ children, image }) => {
  return (
    <div className="flex flex-col rounded-xl shadow-2xl">
      <CardMedia source={image} />
      {children}
    </div>
  );
};

export default Card;
