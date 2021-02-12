import Head from "next/head";

import CardShelf from "components/CardShelf";
import Layout from "components/Layout";

import { Grid } from "semantic-ui-react";

const Publishers = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Editoriales</title>
      </Head>
      <h1 className="mb-8 uppercase">Editoriales</h1>
      <div className="grid grid-cols-6 gap-4">
        {data.map((x, i) => {
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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/publishers");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default Publishers;
