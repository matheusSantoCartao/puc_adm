import axios from 'axios';
import router from '../router'
//const isProd = process.env.NODE_ENV === 'production';
const isProd = true;
const instance = axios.create({
    baseURL: (isProd) ? 'https://api.carpemundi.com.br/api' : 'http://127.0.0.1:8000/api',
    headers:{
        'Authorization': localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "",
    }
})


const GET = (url: string | void) => instance.get(url || "").then(res => res.data).then(res => {
    return res
}).catch(e => {
    if(e.response.status == 403)
        router.push({ path: '/login' })
    throw e.response.data.message
})

const POST = (url: string | void, params: object | Array<any|void> | void) => instance.post(url || "", params).then(res => res.data).then(res => {
    return res
}).catch(e => {
    if(e.response.status == 403)
        router.push({ path: '/login' })
    throw e.response.data.message
})

const PUT = (url: string | void, params: object | Array<any> | void) => instance.put(url || "", params).then(res => res.data).then(res => {
    return res
}).catch(e => {
    if(e.response.status == 403)
        router.push({ path: '/login' })
    throw e.response.data.message
})

const DELETE = (url: string | void) => instance.delete(url || "").then(res => res.data).then(res => {
    return res
}).catch(e => {
    if(e.response.status == 403)
        router.push({ path: '/login' })
    throw e.response.data.message
})


const LOGIN = (route: string, payload: object | void): Promise<string> => instance.post(route, payload).then(res => res.data).then(res => {
    return res.token;
}).catch(e => {
    if(e.response.status == 403)
        router.push({ path: '/login' })
    throw e.response.data.message
})


export { GET, POST, PUT, DELETE, LOGIN, instance };