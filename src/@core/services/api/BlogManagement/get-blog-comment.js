import http from '../../../interceptor/index'

const getBlogComment = async (blogId) => {
  try {
    const result = await http.get(`/News/GetAdminNewsComments?NewsId=${blogId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getBlogComment};