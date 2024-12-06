import http from '../../../../interceptor/index'

const getTermWithId = async (id) => {
    try {
    const result = await http.get(`/Term/${id}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getTermWithId}