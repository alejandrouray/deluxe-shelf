import { useRouter } from "next/router";

const MenuItem = ({ to, name, active }) => {
  const router = useRouter();
  const handleClick = () => router.push(to);

  return (
    <div className="flex items-center">
      <a
        className={`${
          active === to ? "active" : ""
        } font-bold hover:bg-gray-800 hover:bg-opacity-50 p-3 rounded-lg cursor-pointer`}
        onClick={handleClick}
      >
        {name}
      </a>
      <style jsx>
        {`
          .active {
            @apply font-bold py-2 px-4 rounded;
          }
        `}
      </style>
    </div>
  );
};

export default MenuItem;
