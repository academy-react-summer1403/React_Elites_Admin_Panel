import http from '../../../interceptor/index'

const postCreateBlog = async (body) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
  try {
    const result = await http.post(`/News/CreateNews`, body, config);

    return result;
  } catch (error) {
    return [];
  }
};

export {postCreateBlog};