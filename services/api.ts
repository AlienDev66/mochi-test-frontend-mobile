import axios from 'axios';

const TOKEN_GITHUB_API = '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';

const headers = {
    Authorization: 'bearer ' + TOKEN_GITHUB_API
};

const api = axios.create({ headers, baseURL: 'https://api.github.com' });

export default api;
