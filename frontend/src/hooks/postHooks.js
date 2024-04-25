import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { message } from "antd";


export const useCreatePost = () => {
    return useMutation(async (data) => {
        const response = await axios.post('http://localhost:5000/api/posts', data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    },{
        onSuccess: (data) => {
            message.success('Post created successfully');
        },
        onError: (error) => {
            message.error(error.response.status + ': Failed to create post');
        }
    });
};

export const useGetAllPosts = () => {
    return useQuery('posts', async () => {
        const response = await axios.get('http://localhost:5000/api/posts', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    });
}

export const useDeletePost = () => {
    return useMutation(async (postId) => {
        const response = await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    },{
        onSuccess: (data) => {
            message.success('Post deleted successfully');
        },
        onError: (error) => {
            message.error(error.response.status + ': Failed to delete post');
        }
    });
}