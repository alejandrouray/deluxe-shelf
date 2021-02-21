export const compose = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => fn(acc), x);

export const fetchAPI = async (url) => await fetch(process.env.ENDPOINT + url);

export const jsonFetch = async (res) => await res.json();

export const getAPIData = async (url) => {
  console.log(await jsonFetch(await fetchAPI(url)));
  return await jsonFetch(await fetchAPI(url));
};
