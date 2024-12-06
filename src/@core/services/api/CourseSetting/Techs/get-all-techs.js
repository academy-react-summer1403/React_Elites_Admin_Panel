import http from '../../../../interceptor/index'

const getAllTechs = async () => {
    try {
    const result = await http.get('/Technology');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllTechs}