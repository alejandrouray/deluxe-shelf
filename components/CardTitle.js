import { useRouter } from "next/router";

const CardTitle = ({ text, to, styles = {} }) => {
  const router = useRouter();
  const { mb } = styles;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(to);
  };

  return (
    <a
      className={`h-14 cursor-pointer font-semibold text-blue-500 text-xl ${
        mb ? `mb-${mb}` : ""
      }`}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default CardTitle;
