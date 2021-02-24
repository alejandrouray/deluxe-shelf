import Head from "next/head";

import Card from "components/Card";
import Layout from "components/Layout";
import { getAPIData } from "utils";

const Publisher = ({ collection, books }) => {
  return (
    <Layout>
      {/* <Head>
        <title>{collection.title}</title>
      </Head>
      <Segment placeholder>
        <h1 className="mb-8 uppercase text-center">{collection.title}</h1>
      </Segment>
      <h1 className="my-10 uppercase">Títulos</h1>
      <Grid columns={2}>
        <Grid.Row>
          {books.map((x, i) => {
            return (
              <Grid.Column key={i} width={3}>
                <Card data={x} type="book" />
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

  const [collection, books] = [
    await getAPIData(`/api/collections/${id}`),
    await getAPIData(`/api/books/collection/${id}`),
  ];

  return {
    props: { collection, books },
  };
}

export default Publisher;
