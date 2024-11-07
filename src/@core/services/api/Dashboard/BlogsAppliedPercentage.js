import http from '../../../interceptor/index'

const blogsAppliedPercentage = async (bool) => {
    try {
    const result = await http.get(`/News/AdminNewsFilterList?IsActive=${bool}`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {blogsAppliedPercentage};