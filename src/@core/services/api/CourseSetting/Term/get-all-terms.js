import http from '../../../../interceptor/index'

const getAllTerms = async () => {
    try {
    const result = await http.get('/Term');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllTerms}