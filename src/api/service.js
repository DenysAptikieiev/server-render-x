import { API_DOMAIN, METHOD } from './constans';

export const request = async (endpoint, options) => {
  const init = {
    body: options?.body,
    method: options?.method || METHOD.GET,
    'Content-Type': 'application/json',
    Accept: 'application/json',
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
