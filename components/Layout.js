import Header from "./Header";
import { Container } from "semantic-ui-react";
import styles from "./styles/layout.module.css";

const Layout = ({ children }) => {
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
