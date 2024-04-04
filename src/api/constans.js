export const API_DOMAIN = 'https://jsonplaceholder.typicode.com/';
export const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

export const initHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
