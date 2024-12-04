import http from '../../../interceptor/index'

const getUserList = async (value) => {
    try {
    const result = await http.get(`/User/UserMannage?PageNumber=8&RowsOfPage=50&IsActiveUser=true`);
    return result;
    }
    catch (error) {
    return [];
    }
};

const getDeActiveUserList = async (rows) => {
    try {
    const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=50&IsActiveUser=false`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getUserList, getDeActiveUserList};