import axios from 'axios';

const TOKEN_GITHUB_API = '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';

const headers = {
    Authorization: 'bearer ' + TOKEN_GITHUB_API
};

const api = axios.create({ headers, baseURL: 'https://api.github.com' });

export default api;
