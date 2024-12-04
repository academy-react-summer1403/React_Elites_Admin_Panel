import http from '../../../interceptor/index'

const putUserDetail = async (value) => {
    try {
    const result = await http.put('/User/UpdateUser', value);
    return result;
    }
    catch (error) {
    return error;
    }
};

export {putUserDetail};