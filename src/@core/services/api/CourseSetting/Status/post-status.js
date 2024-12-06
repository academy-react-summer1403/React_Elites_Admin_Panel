import http from '../../../../interceptor/index'

const postCreateStatus = async (value) => {
    try {
    const result = await http.post(`/Status`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {postCreateStatus}