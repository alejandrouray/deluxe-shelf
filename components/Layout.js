import Header from "./Header";
import Head from "next/head";
import { Container } from "semantic-ui-react";
import styles from "./styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className="font-sans">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Container className={styles.container} fluid>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
