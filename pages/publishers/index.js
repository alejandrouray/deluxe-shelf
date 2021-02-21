import Head from "next/head";

import CardShelf from "components/CardShelf";
import Layout from "components/Layout";
import { getAPIData } from "utils";

import { Grid } from "semantic-ui-react";

const Publishers = ({ publishers }) => {
  return (
    <Layout>
      <Head>
        <title>Editoriales</title>
      </Head>
      <h1 className="mb-8 uppercase">Editoriales</h1>
      <div className="grid grid-cols-6 gap-4">
        {publishers.map((x, i) => {
          return (
            <Grid.Column key={i} width={3}>
              <CardShelf data={x} type="publisher" />
            </Grid.Column>
          );
        })}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const publishers = await getAPIData("/api/publishers");
  return {
    props: { publishers },
  };
}

export default Publishers;
