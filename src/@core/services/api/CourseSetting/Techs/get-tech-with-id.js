import http from '../../../../interceptor/index'

const getTechWithId = async (id) => {
    try {
    const result = await http.get(`/Technology/${id}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getTechWithId}