import http from '../../../../interceptor/index'

const getStatusWithId = async (id) => {
    try {
    const result = await http.get(`/Status/${id}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getStatusWithId}