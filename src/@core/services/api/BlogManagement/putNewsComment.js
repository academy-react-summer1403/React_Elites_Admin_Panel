import http from '../../../interceptor/index'

export const putNewsCommennt = async (values)  => {

    try{
        const response = await http.put("/News/UpdateNewsComment", values);
        return response
    }
    catch(error){
        return
    }
}