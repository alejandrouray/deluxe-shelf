const Select = ({ label, name, items = [], onChange }) => {
  return (
    <label className="block mb-4">
      <span className="text-gray-700">{label}</span>
      <select
        name={name}
        className="form-select border-2 border-gray-200 rounded-md block w-full mt-1"
        onChange={onChange}
      >
        <option>Elige una opción</option>
        {items.map((x, i) => (
          <option>{x.name}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
