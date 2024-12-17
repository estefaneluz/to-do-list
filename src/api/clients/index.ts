import axios, { InternalAxiosRequestConfig } from 'axios'

const baseURL = import.meta.env.VITE_API_URL

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'skip-browser-warning',
    Accept: 'application/json'
  }
})

client.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = JSON.parse(localStorage.getItem('user') as string)?.token

    if (token) {
      config.headers.Authorization = `Token ${token}`
    }

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default client
