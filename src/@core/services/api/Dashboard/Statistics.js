import http from '../../../interceptor/index'

const statistics = async () => {
    try {
    const result = await http.get('/Home/LandingReport');
    return result;
    }
    catch (error) {
    return [];
    }
};

export {statistics};