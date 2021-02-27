import Head from "next/head";
import Layout from "components/Layout";
import useDispatch from "utils/hooks/useDispatch";

import { SET_PAGE } from "utils/constants";

const Home = () => {
  useDispatch(SET_PAGE, "Deluxe Shelf");

  return (
    <Layout home>
      <Head>
        <title>Deluxe Shelf</title>
      </Head>
      <section>home</section>
    </Layout>
  );
};

export default Home;
