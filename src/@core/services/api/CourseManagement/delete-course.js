import http from '../../../interceptor/index'

const deleteCourse = async (body) => {
    let config = {
        headers: {
            "Content-Type": "application/json", 
        }
    }
    try {
    const result = await http.delete('/Course/DeleteCourse', body, config);
    return result;
    }
    catch (error) {
    return error;
    }
};

export {deleteCourse};