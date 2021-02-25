import Head from "next/head";

import Layout from "components/Layout";
import Publisher from "components/Publisher";

import { getAPIData } from "utils";

const Publishers = ({ publishers }) => {
  return (
    <Layout>
      <Head>
        <title>Editoriales</title>
      </Head>
      <div className="p-8 bg-gray-200 bg-opacity-50 rounded-xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {publishers.map((x, i) => (
            <Publisher data={x} key={i} type="publisher" />
          ))}
        </div>
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
