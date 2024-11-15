import http from '../../interceptor/index'

const getCourseGroup = async (tId, cId) => {
  try {
    const result = await http.get(`/CourseGroup/GetCourseGroup?TeacherId=${tId}&CourseId=${cId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseGroup};