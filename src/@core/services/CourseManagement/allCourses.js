import http from '../../interceptor/index'

const allCourseList = async (rows) => {
    try {
    const result = await http.get(`/Course/CourseList?PageNumber=1&RowsOfPage=${rows}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {allCourseList};