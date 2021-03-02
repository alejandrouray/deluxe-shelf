const Input = ({ label, name, placeholder, onChange }) => {
  return (
    <label className="block mb-4">
      <span className="text-gray-700">{label}</span>
      <input
        name={name}
        type="text"
        className="form-input mt-1 border-2 border-gray-200 rounded-md block w-full"
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;
