// TODO: move to setting file
const API_SERVER = 'https://api.giphy.com';
const WEB_SERVER = 'https://giphy.com/api';
const API_KEY = 'XNNemKvbx821jjL7rEwQNqp2c8PBoAJQ';

export const END_POINT = {
    getTrendingGifs: {
        url: () => `${API_SERVER}/v1/gifs/trending?api_key=${API_KEY}&limit=20`,
        method: 'GET'
    },
    getViewCount: {
        url: (gifId) => `${WEB_SERVER}/v1/proxy-gif/${gifId}/view-count/`,
        method: 'GET'
    }
}