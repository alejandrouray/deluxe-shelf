import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import MenuItem from "components/MenuItem";

const Header = () => {
  const [active, setActive] = useState("/");
  const router = useRouter();

  useEffect(() => setActive(router.pathname));

  const routes = [
    { to: "/", name: "Deluxe Shelf" },
    { to: "/publishers", name: "Editoriales" },
    { to: "/works", name: "Obras" },
  ];

  return (
    <header className="bg-blue-700 py-4">
      <div className="flex items-center mx-10 border-b-2 border-white pb-3 border-opacity-10 text-white">
        <div className="flex space-x-8 flex-shrink w-9/12">
          <img
            className="h-12 w-12"
            src="https://i.pinimg.com/originals/8e/1d/1c/8e1d1cee4879db1796c87f0a620afe6a.png"
          />
          <div className="flex ml-8 space-x-6">
            {routes.map((x, i) => (
              <MenuItem active={active} key={i} name={x.name} to={x.to} />
            ))}
          </div>
        </div>
        <div className="flex-grow relative text-white mr-4">
          <input
            type="text"
            className="pr-4 pl-10 py-2 font-sans bg-opacity-25 bg-white placeholder-white focus:border-gray-900 w-96 border-gray-300 rounded-md focus:outline-none"
            placeholder="Buscar"
          />
          <div className="absolute left-3 top-2.5">
            <img className="w-5 h-5 text-white" src="/icons/search.svg" />
          </div>
        </div>
        <div className="flex flex-grow space-x-5 items-center">
          <img className="w-6 h-6" src="/icons/bell.svg" />
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
