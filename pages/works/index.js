import Head from "next/head";
import { getAPIData } from "utils";
import { SET_PAGE, TOGGLE_MODAL, MIN_SELECT } from "utils/constants";
import { useForm } from "react-hook-form";

import useDispatch from "utils/hooks/useDispatch";
import useModal from "utils/hooks/useModal";

import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa";

import Modal from "components/Modal";
import Work from "components/Work";
import Form from "components/form/";
import Input from "components/form/Input";
import Select from "components/form/Select";

const Works = ({ authors, works, genres }) => {
  const PAGE_TITLE = "Obras";

  const [modal, setModal] = useModal();
  const toggleModal = () => setModal({ type: TOGGLE_MODAL, payload: !modal });
  const addWork = (data) => console.log(data);

  useDispatch(SET_PAGE, PAGE_TITLE);

  const { register, handleSubmit, errors, control } = useForm();

  const formElements = [
    {
      type: Input,
      id: "title",
      label: "Título",
      valid: { required: true },
    },
    { type: Input, id: "year", label: "Año" },
    { type: Input, id: "language", label: "Idioma", valid: { required: true } },
    {
      type: Select,
      id: "authors",
      label: "Autores",
      labelKey: "name",
      options: authors,
      valid: MIN_SELECT,
    },
    {
      type: Select,
      id: "genres",
      label: "Géneros",
      labelKey: "title",
      options: genres,
      valid: MIN_SELECT,
    },
  ];

  return (
    <div className="p-4 bg-gray-200 bg-opacity-50 rounded-xl mb-8">
      <Head>
        <title>{PAGE_TITLE}</title>
      </Head>
      <div className="my-4 flex justify-end items-center">
        <div
          className="cursor-pointer flex hover:bg-gray-800 hover:bg-opacity-50 items-center rounded-lg p-3 space-x-2"
          onClick={toggleModal}
        >
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <FaPlus />
          </IconContext.Provider>

          <a className="hover:no-underline font-bold text-white">Nueva Obra</a>
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
        action={{ title: "Agregar obra", method: handleSubmit(addWork) }}
      >
        <Form
          elements={formElements}
          register={register}
          control={control}
          errors={errors}
        />
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
