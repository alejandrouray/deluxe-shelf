import { Form } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import { Controller } from "react-hook-form";
import React from "react";
import { showErrors } from "utils";

const Select = ({
  id,
  label,
  labelKey,
  options = [],
  placeholder,
  multiple = true,
  control,
  valid,
  errors,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Controller
        name={id}
        control={control}
        defaultValue={[]}
        rules={valid}
        render={({ onChange, value }) => (
          <Typeahead
            id={id}
            labelKey={labelKey}
            multiple={multiple}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            selected={value}
          />
        )}
      />
      {showErrors(errors, id)}
    </Form.Group>
  );
};

export default Select;
