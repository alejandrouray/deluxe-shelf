import Head from "next/head";
import { useState } from "react";
import { getAPIData } from "utils";
import { SET_PAGE } from "utils/constants";
import useDispatch from "utils/hooks/useDispatch";

import Modal from "components/Modal";
import Work from "components/Work";
import Form from "components/form/";
import Input from "components/form/Input";
import Select from "components/form/Select";

const Works = ({ authors, works, genres }) => {
  const pageTitle = "Obras";
  const [modal, setModal] = useState(false);
  const [work, setWork] = useState({
    authors: [],
    genres: [],
    language: "",
    title: "",
    year: "",
  });

  const formElements = [
    { type: Input, id: "title", label: "Título" },
    { type: Input, id: "year", label: "Año" },
    { type: Input, id: "language", label: "Idioma" },
    {
      type: Select,
      id: "authors",
      label: "Autores",
      labelKey: "name",
      options: authors,
      selected: work,
    },
    {
      type: Select,
      id: "genres",
      label: "Géneros",
      labelKey: "title",
      options: genres,
      selected: work,
    },
  ];

  const toggleModal = () => setModal(!modal);
  const addWork = () => alert("SUCCESS");
  const updateForm = (e, key) =>
    setWork({ ...work, [key]: e.target ? e.target.value : e });

  useDispatch(SET_PAGE, pageTitle);

  return (
    <div className="p-4 bg-gray-200 bg-opacity-50 rounded-xl mb-8">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="my-4 flex justify-end items-center">
        <div
          className="flex items-center hover:bg-gray-800 hover:bg-opacity-50 rounded-lg p-3 space-x-2 cursor-pointer"
          onClick={toggleModal}
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

      <Modal
        activator={modal}
        toggle={toggleModal}
        title="Nueva Obra"
        action={{ title: "Agregar obra", method: addWork }}
      >
        <Form elements={formElements} onChange={updateForm} />
      </Modal>
    </div>
  );
};

export async function getServerSideProps() {
  const works = await getAPIData("/api/works");
  const authors = await getAPIData("/api/authors");
  const genres = await getAPIData("/api/genres");

  return {
    props: { authors, works, genres },
  };
}

export default Works;
