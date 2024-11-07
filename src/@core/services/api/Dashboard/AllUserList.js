import http from '../../../interceptor/index'

const allUserList = async () => {
    try {
    const result = await http.get(`/User/UserMannage?PageNumber=1&RowsOfPage=10`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {allUserList};