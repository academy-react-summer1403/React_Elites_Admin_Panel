import http from '../../../../interceptor/index'

const getAllStatus = async () => {
    try {
    const result = await http.get('/Status');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllStatus}