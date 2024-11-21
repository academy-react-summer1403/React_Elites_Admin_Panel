import http from '../../../interceptor/index'

const activeCourse = async (body) => {
    try {
    const result = await http.put(`/Course/ActiveAndDeactiveCourse`, body);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {activeCourse};