import http from '../../../interceptor/index'

const allBlogsListD = async () => {
    try {
    const result = await http.get('/News/AdminNewsFilterList?PageNumber=1&RowsOfPage=50');
    return result;
    }
    catch (error) {
    return [];
    }
};

const allBlogsListD2 = async () => {
    try {
        const result = await http.get('/News/AdminNewsFilterList?PageNumber=1&RowsOfPage=40&IsActive=false');
        return result;
        }
        catch (error) {
        return [];
        }
}

export {allBlogsListD, allBlogsListD2};