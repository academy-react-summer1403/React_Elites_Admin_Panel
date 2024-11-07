import http from '../../../interceptor/index'

const allCourseListD = async (rows) => {
    try {
    const result = await http.get(`/Course/CourseList?PageNumber=1&RowsOfPage=${rows}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {allCourseListD};