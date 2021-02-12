import Head from "next/head";

import CardShelf from "components/CardShelf";
import Layout from "components/Layout";

import { Grid, Segment } from "semantic-ui-react";

const Publisher = ({ data, collections }) => {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Segment placeholder>
        <h1 className="mb-8 uppercase text-center">{data.title}</h1>
      </Segment>
      <h1 className="my-10 uppercase">Colecciones</h1>
      <Grid columns={2}>
        <Grid.Row>
          {collections.map((x, i) => {
            return (
              <Grid.Column key={i} width={3}>
                <CardShelf data={x} type="collection" />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/publishers/${params.id}`);
  const json = await res.json();

  const resX = await fetch(
    `http://localhost:3000/api/collections/publisher/${params.id}`
  );
  const jsonX = await resX.json();

  return {
    props: {
      data: json,
      collections: jsonX,
    },
  };
}

export default Publisher;
