import http from '../../../../interceptor/index'

const putClassRoom = async (value) => {
    try {
    const result = await http.put(`/ClassRoom`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {putClassRoom}