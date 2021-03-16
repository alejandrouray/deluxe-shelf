import { Form as FormBoostrap } from "react-bootstrap";
import { setPlaceholder, showErrors } from "utils";

const Form = ({ elements, register, control, errors }) => {
  return (
    <FormBoostrap>
      {elements.map((x) => (
        <x.type
          id={x.id}
          control={control}
          errors={errors}
          key={x.id}
          label={x.label}
          labelKey={x.labelKey && x.labelKey}
          options={x.options && x.options}
          placeholder={setPlaceholder(x.label)}
          register={register}
          selected={x.selected && x.selected[x.id]}
          showErrors={showErrors}
          valid={x.valid}
        />
      ))}
    </FormBoostrap>
  );
};

export default Form;
