const Select = ({ label, name, items = [], onChange }) => {
  return (
    <label className="block mb-4">
      <span className="text-gray-700">{label}</span>
      <select
        name={name}
        className="form-select border-2 border-gray-200 rounded-md block w-full mt-1"
        onChange={onChange}
      >
        <option className="text-gray-400" value="">
          Elige una opción
        </option>
        {items.map((x, i) => (
          <option key={i} value={x._id}>
            {x.name || x.title}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
