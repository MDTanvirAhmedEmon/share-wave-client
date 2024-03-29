
const setAccessToken = (token) => {
    localStorage.setItem('access_token', token);
};

const getAccessToken = (key) => {
    const token = localStorage?.getItem('access_token');
    return token;
};

const removeAccessToken = () => {
    return localStorage.removeItem('access_token');
};

export const accessToken = {
    setAccessToken,
    getAccessToken,
    removeAccessToken
};