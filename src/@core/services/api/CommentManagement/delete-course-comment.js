import http from '../../../interceptor/index'

const deleteCourseComment = async (id) => {
    try {
    const result = await http.delete(`/Course/DeleteCourseComment?CourseCommandId=${id}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {deleteCourseComment};