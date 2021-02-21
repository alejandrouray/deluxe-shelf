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
