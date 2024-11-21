import http from '../../../interceptor/index'

const getBlogFile = async (newsId) => {
  try {
    const result = await http.get(`/News/GetNewsFileList?NewsId=${newsId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getBlogFile};