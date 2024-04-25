import axios from "axios";
import { useMutation } from "react-query";

export const useLikePost = () => {
    return useMutation(async (postId) => {
        const response = await axios.post(`http://localhost:5000/api/posts/${postId}/like`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return response.data;
    });
}