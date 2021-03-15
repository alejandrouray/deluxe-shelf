import Header from "components/Layout/Header";
import Head from "next/head";
import Container from "@material-ui/core/Container";

import SubHeader from "components/SubHeader";

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
      <div className="relative">
        <SubHeader />
        <div className="container absolute top-32 inset-0">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
