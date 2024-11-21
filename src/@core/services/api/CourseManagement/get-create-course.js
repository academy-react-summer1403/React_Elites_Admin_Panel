import http from '../../../interceptor/index'

const getCreateCourse = async () => {
  try {
    const result = await http.get(`/Course/GetCreate`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCreateCourse};