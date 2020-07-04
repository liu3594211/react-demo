import {
    CHANGE_INPUT,
    DELETE,
    AUTO_INCREMENT,
    ASYNCHRONUS_DATA
} from './actionTypes'
import {
    getHomeDate
} from './../serve/index'

//箭头函数的两种写法，带大括号的不用return，下面不带花括号的就是需要return返回
export const changeInputAction = (e) => ({
    type: CHANGE_INPUT,
    value: e,
})
// export const changeInputAction = (e) => {
//     return {
//         type: CHANGE_INPUT,
//         value: e,
//     }
// }
export const AsynchronousData = (value) => {
    return {
        type: ASYNCHRONUS_DATA,
        value: value,
    }
}

//redux-thunk的使用
export const getTodoList = () => {
    return async (dispatch) => {
        const data = await getHomeDate()
        const action = AsynchronousData(data.data.list[2].icon_list);
        console.log('111', data);
        dispatch(action)
    }



}