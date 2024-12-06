import http from '../../../../interceptor/index'

const postBuilding = async (value) => {
    try {
    const result = await http.post(`/Building`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {postBuilding}