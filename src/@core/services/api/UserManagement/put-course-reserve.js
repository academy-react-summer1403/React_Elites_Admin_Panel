import http from '../../../interceptor/index'

const putCourseReserve = async (value) => {
    let config = {
        headers: {
            "Content-Type": "application/json", 
        }
    }
    try {
    const result = await http.post('/CourseReserve/SendReserveToCourse', value, config);
    return result;
    }
    catch (error) {
    return error;
    }
};

export {putCourseReserve};