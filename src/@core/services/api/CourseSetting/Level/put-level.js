import http from '../../../../interceptor/index'

const putEditLevel = async (value) => {
    try {
    const result = await http.put(`/CourseLevel`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {putEditLevel}