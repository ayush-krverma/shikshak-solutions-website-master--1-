
import {api} from './../../hooks/api/ApiConfig';

export const actionToRegisterUser = (payload) => async (payload) => {
    try {
        const { data } = await api.post('common/insertCommonApiCall',payload);
        return data;
    } catch (error) {
        console.log(error,'error');
    }
}
