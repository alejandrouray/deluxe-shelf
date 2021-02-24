import Head from "next/head";

import Card from "components/Card";
import Layout from "components/Layout";
import { getAPIData } from "utils";

const Publisher = ({ publisher, collections }) => {
  return (
    <Layout>
      {/* <Head>
        <title>{publisher.title}</title>
      </Head>
      <Segment placeholder>
        <h1 className="mb-8 uppercase text-center">{publisher.title}</h1>
      </Segment>
      <h1 className="my-10 uppercase">Colecciones</h1>
      <Grid columns={2}>
        <Grid.Row>
          {collections.map((x, i) => {
            return (
              <Grid.Column key={i} width={3}>
                <Card data={x} type="collection" />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid> */}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const [publisher, collections] = [
    await getAPIData(`/api/publishers/${id}`),
    await getAPIData(`/api/collections/publisher/${id}`),
  ];

  return {
    props: { publisher, collections },
  };
}

export default Publisher;
