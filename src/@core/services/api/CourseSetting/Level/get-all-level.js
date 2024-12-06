import http from '../../../../interceptor/index'

const getAllLevel = async () => {
    try {
    const result = await http.get('/CourseLevel/GetAllCourseLevel');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllLevel}