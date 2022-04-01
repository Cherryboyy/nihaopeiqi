// axios相对于fetch，更加方便，语义化的API

import axios from 'axios'

// 定义相关的endpoint

const endPoints = {

    test: "http://www.iaxixi.com:7001",

    // prod: "https://.../"

}


// 创建axios的实例

const instance = axios.create({

    baseURL: endPoints.test,

    timeout: 3000,

    // 为所有请求设置通用的header

    headers: { Authorization: "Bear mytoken" }

})

// 通过axios定义拦截器预处理所有请求

instance.interceptors.response.use(

    (res:any) => {

        // 请求成功的一些逻辑

        return res

    },

    (err:any) => {

        if (err.response.status === 403) {

            // 统一处理未授权请求，跳转到登录页面

            document.location = '/login'

        }

        return Promise.reject(err)

    }

)

export default instance