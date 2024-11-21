import http from '../../../interceptor/index'

const postCreateCourse = async (values) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
  try {
    const result = await http.post(`/Course`, values, config);

    return result;
  } catch (error) {
    return [];
  }
};

export {postCreateCourse};