import Link from "next/link";
import Header from "./Header";
import { Container } from "semantic-ui-react";
import styles from "./styles/layout.module.css";

const Layout = ({ children, home }) => {
  return (
    <div>
      <Header />
      <Container className={styles.container} fluid>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
