import http from '../../../interceptor/index'

const postCourseCommentAccept = async (id) => {
  try {
    const result = await http.post(`/Course/AcceptCourseComment?CommentCourseId=${id}`);

    return result;
  } catch (error) {
    return error;
  }
};

export {postCourseCommentAccept};