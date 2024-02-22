/**
 * 
 * @param {string} resource - The resource to be fetched from the API
 * @param {string} options - Aditional arguments to fetch specific data from the API. If no options are provided, the default value is an empty string
 * @returns {JSON} - The data fetched from the API
 */
export const ReqApi = async (resource, options="") => {
  const url = `https://rickandmortyapi.com/api/${resource}/${options}`;
  const api = await fetch(url);
  const response = await api.json();
  
  return (response);
};