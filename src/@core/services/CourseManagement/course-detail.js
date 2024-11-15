import http from '../../interceptor/index'

const getCourseById = async (courseId) => {
  try {
    const result = await http.get(`/Course/${courseId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseById};