import axios from 'axios';

const TOKEN_GITHUB_API = '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';

const headers = {
    Authorization: 'bearer ' + TOKEN_GITHUB_API
};

const api = axios.create({ headers, baseURL: 'https://api.github.com' });

export default api;
