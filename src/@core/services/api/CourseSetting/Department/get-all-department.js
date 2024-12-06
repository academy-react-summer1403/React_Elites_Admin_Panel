import http from '../../../../interceptor/index'

const getAllDepartment = async () => {
    try {
    const result = await http.get('/Department');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllDepartment}