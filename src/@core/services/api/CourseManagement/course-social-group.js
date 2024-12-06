import http from '../../../interceptor/index'

const getCourseSocial = async () => {
  try {
    const result = await http.get(`/CourseSocialGroup`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseSocial};