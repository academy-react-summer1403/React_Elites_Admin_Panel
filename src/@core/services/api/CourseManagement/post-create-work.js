import http from '../../../interceptor/index'

const postCreateWork = async (values) => {

  try {
    const result = await http.post(`/AssistanceWork`, values);

    return result;
  } catch (error) {
    return [];
  }
};

export {postCreateWork};