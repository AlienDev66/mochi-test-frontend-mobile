import axios from 'axios';

const TOKEN_GITHUB_API = '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';

const headers = {
    Authorization: 'bearer ' + TOKEN_GITHUB_API
};

const api = axios.create({ headers, baseURL: 'https://api.github.com' });

export default api;
