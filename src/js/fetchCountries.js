const BAS_URL = 'https://restcountries.com';
const fetchCountries = name => {
  return fetch(
    `${BAS_URL}/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};
export { fetchCountries };
