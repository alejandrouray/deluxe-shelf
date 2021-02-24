import Header from "./Header";
import Head from "next/head";

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
        <div className="mx-20 py-12 absolute top-24">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
