import { useState, useEffect } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { useRouter } from "next/router";

import MenuItem from "./MenuItem";

const Header = () => {
  const [active, setActive] = useState("/");
  const router = useRouter();

  const options = [
    { to: "/", name: "Inicio" },
    { to: "/publishers", name: "Editoriales" },
  ];

  useEffect(() => setActive(router.pathname));

  return (
    <header>
      <Segment inverted>
        <Menu inverted pointing secondary>
          {options.map((x, i) => (
            <MenuItem active={active} key={i} name={x.name} to={x.to} />
          ))}
        </Menu>
      </Segment>
    </header>
  );
};

export default Header;
