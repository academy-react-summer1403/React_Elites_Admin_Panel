import http from '../../interceptor/index'

const deleteCourse = async (body) => {
    try {
    const result = await http.delete(`/Course/DeleteCourse`,body);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {deleteCourse};