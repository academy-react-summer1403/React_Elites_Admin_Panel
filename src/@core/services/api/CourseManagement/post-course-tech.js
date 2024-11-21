import http from '../../../interceptor/index'

const postCourseTech = async (courseId, values) => {

  try {
    const result = await http.post(`/Course/AddCourseTechnology?courseId=${courseId}`, values);

    return result;
  } catch (error) {
    return [];
  }
};

export {postCourseTech};