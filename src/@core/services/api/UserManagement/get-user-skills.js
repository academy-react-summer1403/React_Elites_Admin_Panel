import http from '../../../interceptor/index'

const getUserSkills = async (userId) => {
    try {
    const result = await http.get(`/User/UserSkills/${userId}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getUserSkills};