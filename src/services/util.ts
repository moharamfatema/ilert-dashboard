import axios from 'axios';
export const getAuthorizedResource = async (url: string) => {
    return await axios.get(url, {
        headers: {
            Authorization: import.meta.env.VITE_ILERT_API_KEY,
        },
    });
};
type MutateMethod = "POST" | "PUT" | "DELETE";
export const mutateAuthorizedResource = async (
  url: string,
  data: any,
  method: MutateMethod,
) => {
  return await axios({
    method,
    url,
    data,
    headers: {
      Authorization: import.meta.env.VITE_ILERT_API_KEY,
      "Content-Type": "application/json",
    },
  });
};

export const getContextualizedResource = async (
  url: string,
  teamContext: number,
) => {
  return await axios.get(url, {
    headers: {
      Authorization: import.meta.env.VITE_ILERT_API_KEY,
      "Team-Context": teamContext,
    },
  });
};
