import { request } from './service';

export const getUsersAll = async () => {
  return await request('users');
};

export const getUserById = async (userId = '') => {
  return await request(`users/${userId}`);
}
export const getPostsByUser = async (userId = '') => {
  return await request(`posts?userId=${userId}`);
};
export const getAlbumsByUser = async (userId = '') => {
  return await request(`albums?userId=${userId}`);
};
