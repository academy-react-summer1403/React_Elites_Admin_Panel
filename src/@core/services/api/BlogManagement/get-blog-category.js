import http from '../../../interceptor/index'

const getBlogCategory = async () => {
  try {
    const result = await http.get(`/News/GetListNewsCategory`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getBlogCategory};