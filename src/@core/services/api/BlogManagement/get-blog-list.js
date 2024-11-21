import http from '../../../interceptor/index'

const getBlogList = async (activeValue) => {
  try {
    const result = await http.get(`/News/AdminNewsFilterList?PageNumber=1&RowsOfPage=100&IsActive=${activeValue}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getBlogList};