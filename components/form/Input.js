import { Form } from "react-bootstrap";

const Input = ({ id, label, placeholder, onChange }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" placeholder={placeholder} onChange={onChange} />
    </Form.Group>
  );
};

export default Input;
