import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { message } from 'antd';


export const useLogin = () => {
    return useMutation(async (data) => {
        const response = await axios.post('http://localhost:5000/api/auth/signin', data);
        return response.data;
    },{
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
        }
    },{
        onError: (error) => {
            message.error(error.response.data.message);
        }
    });
}

export const useRegister = () => {
    return useMutation(async (data) => {
        const response = await axios.post('/api/auth/register', data);
        return response.data;
    },{
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
        }
    },{
        onError: (error) => {
            message.error(error.response.data.message);
        }
    });
}