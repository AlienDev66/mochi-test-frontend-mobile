import axios from 'axios';

const GITHUB_TOKEN_API = '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';

const headers = {
    Authorization: 'bearer ' + GITHUB_TOKEN_API
};

const api = axios.create({ headers, baseURL: 'https://api.github.com' });

export default api;
