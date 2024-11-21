import http from '../../../interceptor/index'

const getBlogDetail = async (blogId) => {
  try {
    const result = await http.get(`/News/${blogId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getBlogDetail};