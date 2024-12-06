import http from '../../../interceptor/index'

const getAssistanceWork = async (mentorId) => {
  try {
    const result = await http.get(`/CourseAssistance/${mentorId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getAssistanceWork};