import CardMedia from "components/CardMedia";

const Card = ({ children }) => {
  return (
    <div className="bg-white flex flex-col rounded-xl shadow-2xl">
      {children}
    </div>
  );
};

export default Card;
