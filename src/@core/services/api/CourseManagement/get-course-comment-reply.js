import http from '../../../interceptor/index'

const getCourseCommentReply = async (courseId, commentId) => {
  try {
    const result = await http.get(`/Course/GetCourseReplyCommnets/${courseId}/${commentId}`);

    return result;
  } catch (error) {
    return [];
  }
};

export {getCourseCommentReply};