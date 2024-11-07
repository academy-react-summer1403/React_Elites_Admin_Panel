import http from '../../../interceptor/index'

const allUsersListU = async (rows) => {
    try {
    const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=${rows}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {allUsersListU};