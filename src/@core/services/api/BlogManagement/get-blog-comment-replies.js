import http from '../../../interceptor/index'

const getBlogCommentReplies = async (commentId) => {
  try {
    const result = await http.get(`/News/GetRepliesComments?Id=${commentId}`);

    return result;
  } catch (error) {
    return error;
  }
};

export {getBlogCommentReplies};