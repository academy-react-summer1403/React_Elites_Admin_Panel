import http from '../../../interceptor/index'

const getUserDetail = async (userId) => {
    try {
    const result = await http.get(`/User/UserDetails/${userId}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getUserDetail};