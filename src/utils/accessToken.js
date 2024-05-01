
const setAccessToken = (token) => {
    localStorage.setItem('access_token', token);
};

const getAccessToken = () => {
    if (typeof localStorage === 'undefined') {
        return null;
    } else {
        const token = localStorage.getItem('access_token');
        return token;
    }
};

const removeAccessToken = () => {
    return localStorage.removeItem('access_token');
};

export const accessToken = {
    setAccessToken,
    getAccessToken,
    removeAccessToken
};