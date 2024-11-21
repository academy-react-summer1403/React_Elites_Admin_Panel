import http from '../../../interceptor/index'

const getUserList = async (rows) => {
    try {
    const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=50&IsActiveUser=false`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getUserList};