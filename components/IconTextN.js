const IconTextN = ({ icon, text, ancle, styles }) => {
  return (
    <div
      className="cursor-pointer flex hover:bg-gray-800 hover:bg-opacity-50 items-center rounded-lg p-3 space-x-2"
      onClick={toggleModal}
    >
      <IconContext.Provider value={{ size: "1.2rem" }}>
        <FaPlus />
      </IconContext.Provider>

      <a className="hover:no-underline font-bold text-white">Nueva Obra</a>
    </div>
  );
};

export default IconTextN;
