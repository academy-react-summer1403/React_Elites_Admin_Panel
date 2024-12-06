import http from '../../../../interceptor/index'

const postCreateDepartment = async (value) => {
    try {
    const result = await http.post(`/Department`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {postCreateDepartment}