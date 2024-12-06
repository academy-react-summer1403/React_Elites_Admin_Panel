import http from '../../../interceptor/index'

const getMentors = async () => {
  try {
    const result = await http.get('/CourseAssistance');

    return result;
  } catch (error) {
    return [];
  }
};

export {getMentors};