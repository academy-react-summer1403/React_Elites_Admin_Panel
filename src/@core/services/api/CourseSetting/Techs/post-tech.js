import http from '../../../../interceptor/index'

const postCreateTech = async (value) => {
    try {
    const result = await http.post(`/Technology`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {postCreateTech}