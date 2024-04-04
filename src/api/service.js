import { API_DOMAIN, initHeaders, METHOD } from './constans';

export const request = async (endpoint, options) => {
  const headers = options?.headers ?? initHeaders;

  const init = {
    body: options?.body,
    method: options?.method || METHOD.GET,
    headers,
  };
  try {
    const response = await fetch(`${API_DOMAIN}${endpoint}`, init);
    if (response.status) {
      return response.json();
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
