import React, { useState, useEffect } from "react";
import { Menu, Segment } from "semantic-ui-react";

import MenuItem from "./MenuItem";

import { useRouter } from "next/router";

const Header = () => {
  const [active, setActive] = useState("/");
  const router = useRouter();

  const options = [
    { to: "/", name: "Inicio" },
    { to: "/publishers", name: "Editoriales" },
  ];

  useEffect(() => {
    setActive(router.pathname);
  });

  return (
    <header>
      <Segment inverted>
        <Menu inverted pointing secondary>
          {options.map((x, i) => (
            <MenuItem key={i} to={x.to} name={x.name} active={active} />
          ))}
        </Menu>
      </Segment>
    </header>
  );
};

export default Header;
