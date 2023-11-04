import { postApi } from './sendApi';

export const registerApi = async (request: any) => {
  const url = '/api/register';
  const apiRes = await postApi(request, url);

  return apiRes;
};
