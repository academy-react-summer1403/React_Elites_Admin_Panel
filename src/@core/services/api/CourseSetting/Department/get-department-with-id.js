import http from '../../../../interceptor/index'

const getDepartmentWithId = async (id) => {
    try {
    const result = await http.get(`/Department/${id}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getDepartmentWithId}