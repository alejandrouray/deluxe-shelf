import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

const Select = ({
  id,
  label,
  labelKey,
  onChange,
  options = [],
  placeholder,
  selected,
  multiple = true,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Typeahead
        id={id}
        labelKey={labelKey}
        multiple={multiple}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        selected={selected}
      />
    </Form.Group>
  );
};

export default Select;
