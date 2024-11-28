import http from '../../../interceptor/index'

const getAdminInfo = async () => {
    try {
    const result = await http.get('/SharePanel/GetProfileInfo');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getAdminInfo};