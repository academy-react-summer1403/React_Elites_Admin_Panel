import http from '../../../../interceptor/index'

const postCreateLevel = async (value) => {
    try {
    const result = await http.post(`/CourseLevel`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {postCreateLevel}