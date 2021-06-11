import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 50000,
    header: {
        'Content-type': 'x-www-form--urlencode'
    }
})

service.interceptors.request.use(config => {
    return config
},err => {
    console.log(err);
})

service.interceptors.response.use(config => {
    return config.data
},err => {
    console.log(err);
})




export default service