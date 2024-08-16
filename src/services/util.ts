import axios from 'axios';
export const getAuthorizedResource = async (url: string) => {
    return await axios.get(url, {
        headers: {
            Authorization: import.meta.env.VITE_ILERT_API_KEY,
        },
    });
};
