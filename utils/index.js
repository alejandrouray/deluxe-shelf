export const compose = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => fn(acc), x);

export const fetchAPI = async (url) => await fetch(process.env.ENDPOINT + url);

export const jsonFetch = async (res) => await res.json();

export const getAPIData = async (url) => {
  try {
    return jsonFetch(await fetchAPI(url));
  } catch (error) {
    console.log(error);
  }
};

export const setPlaceholder = (key) => {
  const isPlural = key[key.length - 1] === "s";
  return `Ingrese ${isPlural ? "los" : "el"} ${key.toLowerCase()}`;
};

export const showErrors = (errors, id) => {
  const setMessage = (error) => {
    if (!error.message) {
      switch (error.type) {
        case "required":
          return "Este campo es obligatorio";
        case "minSelect":
          return "Debe seleccionar al menos un elemento";
        default:
          return false;
      }
    }

    return error.message;
  };

  if (errors[id]) {
    const message = setMessage(errors[id]);
    return (
      <div className="text-red-500 m-2">
        <span>{message}</span>
      </div>
    );
  }

  return false;
};
