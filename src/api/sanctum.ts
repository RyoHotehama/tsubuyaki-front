import { getApi } from './sendApi';

export const authentication = async () => {
  const request = {};
  const url = '/sanctum/csrf-cookie';
  await getApi(request, url);
};
