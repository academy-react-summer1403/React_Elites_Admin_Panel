import http from '../../../interceptor/index'

const getCoursePayment = async (courseId) => {
  try {
    const result = await http.get(`/CoursePayment/ListOfWhoIsPay?CourseId=${courseId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCoursePayment};