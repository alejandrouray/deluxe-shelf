import Head from "next/head";
import Layout from "components/Layout";
import utilStyles from "styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Deluxe Shelf</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        home
      </section>
    </Layout>
  );
}
