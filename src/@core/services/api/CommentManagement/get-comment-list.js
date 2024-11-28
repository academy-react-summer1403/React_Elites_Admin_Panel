import http from '../../../interceptor/index'

const commentList = async (rows) => {
    try {
    const result = await http.get(`/Course/CommentManagment?PageNumber=1&RowsOfPage=${rows}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {commentList};