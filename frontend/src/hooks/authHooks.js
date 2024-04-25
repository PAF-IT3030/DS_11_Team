import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';


export const useLogin = () => {
    const navigate = useNavigate();
    return useMutation(async (data) => {
        const response = await axios.post('http://localhost:5000/api/auth/signin', data);
        return response.data;
    }, {
        onSuccess: (data) => {
            localStorage.setItem('token', data.accessToken);
            navigate('/home');
        },
        onError: (error) => {
            message.error(error.response.status + ': Invalid username or password');
        }
    });
}


export const useRegister = () => {
    return useMutation(async (data) => {
        const response = await axios.post('http://localhost:5000/api/auth/signup', data);
        return response.data;
    },{
        onSuccess: (data) => {
            message.success('Sign up successful');
        },
        onError: (error) => {
            message.error(error.response.status + ': Sign up failed');
        }
    });
}