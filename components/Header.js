import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import routes from "utils/routes.es";
import MenuItem from "components/MenuItem";

const Header = () => {
  const [active, setActive] = useState("/");
  const router = useRouter();

  useEffect(() => setActive(router.pathname));

  return (
    <header className="bg-indigo-900 py-4">
      <div className="flex items-center space-x-8 mx-10 border-b-2 border-white pb-3 border-opacity-10 text-white">
        <img
          className="h-12 w-12"
          src="https://i.pinimg.com/originals/8e/1d/1c/8e1d1cee4879db1796c87f0a620afe6a.png"
        />
        <div className="flex ml-8 space-x-6">
          {routes.map((x, i) => (
            <MenuItem active={active} key={i} name={x.name} to={x.to} />
          ))}
        </div>
        <div>
          {/* <input
            className="placeholder-gray-500 focus:placeholder-gray-400"
            type="text"
            placeholder="Buscar"
          ></input> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
