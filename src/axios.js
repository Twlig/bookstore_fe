import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://120.79.211.126:8080/bookstore',
  timeout: 2000
});

instance.defaults.headers.common['Authorization'] = ''
instance.interceptors.request.use(config => {
  if (localStorage.getItem("token")) {
    config.headers.Authorization = localStorage.getItem("token")
  }
  return config
}, (_error) => {
    throw new Error;
})

export default instance;
