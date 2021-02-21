import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

const MenuItem = ({ to, name, active }) => {
  const router = useRouter();
  const handleClick = () => router.push(to);

  return <Menu.Item name={name} onClick={handleClick} active={active === to} />;
};

export default MenuItem;
