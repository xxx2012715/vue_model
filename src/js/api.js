import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : '/api'
