import { useRouter } from "next/router";

const MenuItem = ({ to, name, active }) => {
  const router = useRouter();
  const handleClick = () => router.push(to);

  return (
    <button
      className="font-bold hover:bg-gray-800 hover:bg-opacity-50 p-3 rounded-lg"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default MenuItem;
