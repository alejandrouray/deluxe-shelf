import { useRouter } from "next/router";

const CardTitle = ({ text, to }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <a
      className="cursor-pointer font-semibold mb-8 text-2xl truncate"
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default CardTitle;
