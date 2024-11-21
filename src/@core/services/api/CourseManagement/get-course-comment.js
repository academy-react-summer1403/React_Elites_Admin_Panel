import http from '../../../interceptor/index'

const getCourseComment = async (courseId) => {
  try {
    const result = await http.get(`/Course/GetCourseCommnets/${courseId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseComment};