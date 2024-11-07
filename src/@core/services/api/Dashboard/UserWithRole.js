import http from '../../../interceptor/index'

const userWithRole = async (roleId) => {
    try {
    const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=10&roleId=${roleId}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {userWithRole};