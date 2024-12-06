import http from '../../../interceptor/index'

const getUserJobs = async () => {
    try {
    const result = await http.get(`/SharePanel/GetJobHistoriesAdmin`);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {getUserJobs};