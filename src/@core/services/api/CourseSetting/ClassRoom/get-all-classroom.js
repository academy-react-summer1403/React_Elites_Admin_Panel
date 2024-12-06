import http from '../../../../interceptor/index'

const getAllClassroom = async () => {
    try {
    const result = await http.get('/ClassRoom');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllClassroom}