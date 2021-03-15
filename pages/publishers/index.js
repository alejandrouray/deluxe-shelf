import Head from "next/head";
import Publisher from "components/Publisher";
import useDispatch from "utils/hooks/useDispatch";

import { getAPIData } from "utils";
import { SET_PAGE } from "utils/constants";

const Publishers = ({ publishers }) => {
  const pageTitle = "Editoriales";

  useDispatch(SET_PAGE, pageTitle);

  return (
    <div className="p-4 bg-gray-200 bg-opacity-50 rounded-xl mb-8">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {publishers.map((x, i) => (
          <Publisher data={x} key={i} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const publishers = await getAPIData("/api/publishers");
  return {
    props: { publishers },
  };
}

export default Publishers;
