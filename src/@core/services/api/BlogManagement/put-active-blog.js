import http from '../../../interceptor/index'

const putActiveBlog = async (body) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
  try {
    const result = await http.put(`/News/ActiveDeactiveNews`, body, config);

    return result;
  } catch (error) {
    return [];
  }
};

export {putActiveBlog};