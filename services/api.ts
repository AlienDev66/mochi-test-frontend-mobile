import axios from 'axios';

const TOKEN_GITHUB_API = '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';

const headers = {
    Authorization: 'bearer ' + TOKEN_GITHUB_API
};

const api = axios.create({ headers, baseURL: 'https://api.github.com' });

export default api;
