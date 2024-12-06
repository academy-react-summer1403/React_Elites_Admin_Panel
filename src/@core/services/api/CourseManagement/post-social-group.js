import http from '../../../interceptor/index'

const postSocialGroup = async (values) => {

  try {
    const result = await http.post(`/CourseSocialGroup`, values);

    return result;
  } catch (error) {
    return [];
  }
};

export {postSocialGroup};