import http from '../../../../interceptor/index'

const putEditBuilding = async (value) => {
    try {
    const result = await http.put(`/Building`, value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {putEditBuilding}