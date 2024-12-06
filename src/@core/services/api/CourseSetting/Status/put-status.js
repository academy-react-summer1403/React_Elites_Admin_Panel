import http from '../../../../interceptor/index'

const putEditStatus = async (value) => {
    try {
    const result = await http.put(`/Status`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {putEditStatus}