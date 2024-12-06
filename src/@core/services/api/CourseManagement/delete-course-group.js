import http from '../../../interceptor/index'

const deleteCourseGroup = async (value) => {
    try {
    const result = await http.delete('/CourseGroup', value);

    return result;
    }
    catch (error) {
    return error;
    }
};

export {deleteCourseGroup};