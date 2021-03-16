import { Form } from "react-bootstrap";

const Input = ({
  id,
  label,
  placeholder,
  onChange,
  register,
  errors,
  valid,
  showErrors,
  type = "text",
}) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        ref={register(valid)}
      />
      {showErrors(errors, id)}
    </Form.Group>
  );
};

export default Input;
