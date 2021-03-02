import Head from "next/head";

import Layout from "components/Layout";
import Book from "components/Book";
import { getAPIData } from "utils";

import useDispatch from "utils/hooks/useDispatch";
import { SET_PAGE } from "utils/constants/";

const Publisher = ({ collection, books }) => {
  useDispatch(SET_PAGE, collection.title);

  return (
    <Layout>
      <Head>
        <title>{collection.title}</title>
      </Head>
      <div className="p-4 bg-gray-200 bg-opacity-50 rounded-xl">
        <div className="grid grid-cols-6 gap-4">
          {books.map((x, i) => (
            <Book data={x} key={i} />
          ))}
        </div>
      </div>
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
