import Head from "next/head";

import Layout from "components/Layout";
import Publisher from "components/Publisher";

import { getAPIData } from "utils";

import { Grid } from "semantic-ui-react";

const Publishers = ({ publishers }) => {
  return (
    <Layout>
      <Head>
        <title>Editoriales</title>
      </Head>
      <div className="grid grid-cols-6 gap-4 self-center">
        {publishers.map((x, i) => (
          <Publisher data={x} key={i} type="publisher" />
        ))}
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const publishers = await getAPIData("/api/publishers");
  return {
    props: { publishers },
  };
}

export default Publishers;
