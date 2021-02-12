import Layout from "components/Layout";
import utilStyles from "styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        home
      </section>
    </Layout>
  );
}
