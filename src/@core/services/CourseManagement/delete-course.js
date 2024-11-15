import http from '../../interceptor/index'

const deleteCourse = async (body) => {
    try {
    const result = await http.delete('/Course/DeleteCourse', {
        active: true,
        id: '2772aef0-9121-ef11-b6c7-cc06a3e06235'
    });
    return result;
    }
    catch (error) {
    return [];
    }
};

export {deleteCourse};