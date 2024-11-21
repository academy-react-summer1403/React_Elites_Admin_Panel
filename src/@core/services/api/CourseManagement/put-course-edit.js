import http from '../../../interceptor/index'

const putCourseEdit = async (values) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
  try {
    const result = await http.put(`/Course`, values, config);

    return result;
  } catch (error) {
    return error;
  }
};

export {putCourseEdit};