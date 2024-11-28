import http from '../../../interceptor/index'

const postCourseGroup = async (values) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }

  try {
    const result = await http.post('/CourseGroup', values, config);

    return result;
  } catch (error) {
    return [];
  }
};

export {postCourseGroup};