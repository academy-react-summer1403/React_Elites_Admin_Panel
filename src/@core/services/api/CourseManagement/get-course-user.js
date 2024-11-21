import http from '../../../interceptor/index'

const getCourseUser = async (courseId, pageNumber) => {
  try {
    const result = await http.get(`/CourseUser/GetCourseUserList?CourseId=${courseId}&PageNumber=${pageNumber}&RowsOfPage=10`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseUser};