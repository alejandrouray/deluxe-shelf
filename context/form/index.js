import React, { createContext, useState } from "react";

const FormProvider = (props) => {
  const [form, setForm] = useState({});

  return (
    <FormContext.Provider value={[form, setForm]}>
      {props.children}
    </FormContext.Provider>
  );
};

export const FormContext = createContext();
export default FormProvider;
