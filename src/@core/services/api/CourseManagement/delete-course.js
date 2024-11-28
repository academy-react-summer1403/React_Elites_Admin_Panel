import http from '../../../interceptor/index'

const deleteCourse = async (body) => {
    let config = {
        headers: {
            "Content-Type": "application/json", 
        }
    }
    try {
    const result = await http.delete('/Course/DeleteCourse', {
        active: false,
        id: "e6a4b34e-c88f-ef11-b6e6-82fc07f68400"
    }, config);

    return result;
    }
    catch (error) {
    return error;
    }
};

export {deleteCourse};