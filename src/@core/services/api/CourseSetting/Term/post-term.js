import http from '../../../../interceptor/index'

const postTerm = async (value) => {
    try {
    const result = await http.post(`/Term`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {postTerm}