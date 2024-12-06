import http from '../../../../interceptor/index'

const putDepartment = async (value) => {
    try {
    const result = await http.put(`/Department`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {putDepartment}