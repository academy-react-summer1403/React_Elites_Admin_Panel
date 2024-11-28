import http from '../../../interceptor/index'

const postCourseCommentReply = async (value) => {
    let config = {
        headers: {
            "Content-Type": "multipart/form-data", 
        }
    }
    try {
    const result = await http.post(`/Course/AddReplyCourseComment`, value, config);

    return result;
  } catch (error) {
    return error;
  }
};

export {postCourseCommentReply};