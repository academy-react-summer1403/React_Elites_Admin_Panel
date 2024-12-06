import http from '../../../interceptor/index'

const deleteCourseGroup = async (value) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
    try {
    const result = await http.delete('/Course/DeleteCourse', value, config);

    return result;
    }
    catch (error) {
    return error;
    }
};

export {deleteCourseGroup};