import http from '../../../interceptor/index'

const getDashboardReport = async () => {
    try {
    const result = await http.get('/Report/DashboardReport');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getDashboardReport};