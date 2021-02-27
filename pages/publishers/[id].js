import Head from "next/head";
import Layout from "components/Layout";
import Collection from "components/Collection";
import useDispatch from "utils/hooks/useDispatch";

import { getAPIData } from "utils";
import { SET_PAGE } from "utils/constants";

const Publisher = ({ publisher, collections }) => {
  const { title } = publisher;
  useDispatch(SET_PAGE, title);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="p-4 bg-gray-200 bg-opacity-50 rounded-xl">
        <div className="flex flex-wrap justify-center">
          {collections.map((x, i) => (
            <div className="m-2" key={i}>
              <Collection data={x} />
            </div>
          ))}
        </div>
      </div>
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
