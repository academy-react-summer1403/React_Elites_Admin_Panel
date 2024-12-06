import http from '../../../interceptor/index'

const CourseAssistance = async (value) => {
  try {
    const result = await http.post(`/CourseAssistance`, value);

    return result;
  } catch (error) {
    return error;
  }
};

export {CourseAssistance};