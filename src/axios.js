import axios from 'axios'

const instance = axios.create({
  timeout: 5000
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
