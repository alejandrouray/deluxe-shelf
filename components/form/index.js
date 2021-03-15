import { Form as FormBoostrap } from "react-bootstrap";
import { setPlaceholder } from "utils";

const Form = ({ elements, onChange }) => {
  return (
    <FormBoostrap>
      {elements.map((x) => (
        <x.type
          id={x.id}
          key={x.id}
          label={x.label}
          placeholder={setPlaceholder(x.label)}
          onChange={(e) => onChange(e, x.id)}
          labelKey={x.labelKey && x.labelKey}
          options={x.options && x.options}
          selected={x.selected && x.selected[x.id]}
        />
      ))}
    </FormBoostrap>
  );
};

export default Form;
