import http from '../../../../interceptor/index'

const getAllBildings = async () => {
    try {
    const result = await http.get('/Building');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAllBildings}