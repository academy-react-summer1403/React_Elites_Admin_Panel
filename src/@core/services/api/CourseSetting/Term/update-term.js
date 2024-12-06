import { Value } from 'sass';
import http from '../../../../interceptor/index'

const putEditTerm = async (value) => {
    let config = {
        headers: {
            "Content-Type": "application/json", 
        }
    }
    try {
    const result = await http.put('/Term/UpdateTermCloseDate', value);
    return result;
    }
    catch (error) {
    return [];
    }
};

export {putEditTerm}