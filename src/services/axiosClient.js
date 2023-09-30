import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://tools.texoit.com/backend-java/api/movies',
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin': '*' },
})

export default axiosClient
