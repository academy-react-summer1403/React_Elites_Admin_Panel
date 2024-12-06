import http from '../../../../interceptor/index'

const postCreateClass = async (value) => {
    try {
    const result = await http.post(`/ClassRoom`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {postCreateClass}