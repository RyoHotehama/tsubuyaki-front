import { postApi } from './sendApi';

export const loginApi = async (request: any) => {
  const url = '/api/login';
  const apiRes = await postApi(request, url);

  return apiRes;
};
