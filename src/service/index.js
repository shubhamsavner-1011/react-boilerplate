import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
  timeout: 15000,
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => instance.get(url).then(responseBody),
  // post: (url, body: {}) => instance.post(url, body).then(responseBody),
  // put: (url, body: {}) => instance.put(url, body).then(responseBody),
  delete: (url) => instance.delete(url).then(responseBody),
};

export const Post = {
  getPosts: () => requests.get('posts'),
  getAPost: (id) => requests.get(`posts/${id}`),
  createPost: (post) => requests.post('posts', post),
  updatePost: (post, id) => requests.put(`posts/${id}`, post),
  deletePost: (id) => requests.delete(`posts/${id}`),
};
