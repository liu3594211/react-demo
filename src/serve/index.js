import ajax from './ajax'
// 1. 定义基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc/api/'

/*****Home 模块*******/
export const getHomeDate = () => ajax(BASE_URL + 'homeApi')