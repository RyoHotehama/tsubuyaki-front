import axios from '@/libs/axios';

export const getApi = async (request: any, url: string) => {
  try {
    const response = await axios.get(url, {
      params: request,
    });
    const res = {
      data: response.data,
      code: response.status,
    };

    return res;
  } catch (err: any) {
    const res = {
      data: err.response?.data,
      code: err.response?.status,
    };

    throw res;
  }
};

export const postApi = async (request: any, url: string, token?: string) => {
  try {
    const response = await axios.post(url, request);
    const res = {
      data: response.data,
      code: response.status,
    };

    return res;
  } catch (err: any) {
    const res = {
      data: err.response?.data,
      code: err.response?.status,
    };

    throw res;
  }
};

export const putApi = async (request: any, url: string, token?: string) => {
  try {
    const response = await axios.put(url, request, {
      headers: { Authorization: 'Bearer ' + token },
    });
    const res = {
      data: response.data,
      code: response.status,
    };

    return res;
  } catch (err: any) {
    const res = {
      data: err.response?.data,
      code: err.response?.status,
    };

    return res;
  }
};

export const deleteApi = async (request: any, url: string, token?: string) => {
  try {
    const response = await axios.delete(url, {
      headers: { Authorization: 'Bearer ' + token },
      params: request,
    });
    const res = {
      data: response.data,
      code: response.status,
    };

    return res;
  } catch (err: any) {
    const res = {
      data: err.response?.data,
      code: err.response?.status,
    };

    return res;
  }
};
