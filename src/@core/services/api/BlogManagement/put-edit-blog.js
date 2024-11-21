import http from '../../../interceptor/index'

const putEditBlog = async (body) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
  try {
    const result = await http.put(`/News/UpdateNews`, body, config);

    return result;
  } catch (error) {
    return [];
  }
};

export {putEditBlog};