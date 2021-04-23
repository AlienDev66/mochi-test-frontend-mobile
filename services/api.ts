import axios from 'axios';

const TOKEN_GITHUB_API = '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';

const headers = {
    Authorization: 'bearer ' + TOKEN_GITHUB_API
};

const api = axios.create({ headers, baseURL: 'https://api.github.com' });

export default api;
