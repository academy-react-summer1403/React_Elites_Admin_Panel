import http from '../../../../interceptor/index'

const putEditTech = async (value) => {
    try {
    const result = await http.put(`/Technology`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {putEditTech}