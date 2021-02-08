import Link from "next/link";
import { Menu } from "semantic-ui-react";

const MenuItem = ({ to, name, active }) => {
  return (
    <Link href={to}>
      <Menu.Item name={name} active={active === to} />
    </Link>
  );
};

export default MenuItem;
