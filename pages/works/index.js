import Head from "next/head";
import { useState } from "react";
import { getAPIData } from "utils";
import { SET_PAGE } from "utils/constants";
import Layout from "components/Layout";
import Work from "components/Work";
import useDispatch from "utils/hooks/useDispatch";
import Modal from "components/Modal";
import Input from "components/Input";
import Select from "components/Select";

const Works = ({ authors, works }) => {
  const pageTitle = "Obras";
  const [modal, setModal] = useState(false);

  const [work, setWork] = useState({
    title: "",
    year: "",
    language: "",
    authors: [],
    genres: [],
  });

  const handleInputChange = (event) => {
    setWork({
      ...work,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = () => setModal(!modal);

  useDispatch(SET_PAGE, pageTitle);

  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="p-4 bg-gray-200 bg-opacity-50 rounded-xl">
        <div className="my-8 flex justify-end items-center">
          <div
            className="flex items-center hover:bg-gray-800 hover:bg-opacity-50 rounded-lg p-3 space-x-2 cursor-pointer"
            onClick={handleClick}
          >
            <img src="/icons/plus.svg" className="h-6 w-6" />
            <a className="font-bold text-white">Nueva Obra</a>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {works.map((x, i) => (
            <Work data={x} key={i} />
          ))}
        </div>

        <div
          className={`${
            modal ? "" : "hidden"
          } fixed z-10 inset-0 overflow-y-auto`}
        >
          <Modal visible={modal}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-t-8 border-blue-700">
              <p className="font-bold text-lg uppercase border-b-2 pb-2 mb-6">
                Datos de la Obra
              </p>
              <form>
                <Input
                  label="Título"
                  name="title"
                  placeholder="Ingrese el título"
                  onChange={handleInputChange}
                />
                <Input
                  label="Año"
                  name="year"
                  placeholder="Ingrese el año"
                  onChange={handleInputChange}
                />
                <Input
                  label="Idioma"
                  name="language"
                  placeholder="Ingrese el idioma"
                  onChange={handleInputChange}
                />
                <Select
                  label="Autores"
                  name="authors"
                  items={authors}
                  onChange={handleInputChange}
                />
                <Select
                  label="Géneros"
                  name="genres"
                  items={authors}
                  onChange={handleInputChange}
                />
              </form>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                He Terminado
              </button>
              <button
                type="button"
                className="font-sans mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={handleClick}
              >
                Cancelar
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const works = await getAPIData("/api/works");
  const authors = await getAPIData("/api/authors");

  return {
    props: { authors, works },
  };
}

export default Works;
