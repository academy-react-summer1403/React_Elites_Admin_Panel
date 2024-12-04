import http from '../../../interceptor/index'

const getAllTeacherCourse = async (rows) => {
  try {
    const result = await http.get(`/Course/TeacherCourseList?PageNumber=1&RowsOfPage=${rows}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getAllTeacherCourse};