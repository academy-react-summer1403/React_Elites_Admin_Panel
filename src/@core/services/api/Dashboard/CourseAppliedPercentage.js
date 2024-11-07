import http from '../../../interceptor/index'

const courseAppliedPercentage = async () => {
    try {
    const result = await http.get('/Course/CourseList?PageNumber=1&RowsOfPage=312');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {courseAppliedPercentage};