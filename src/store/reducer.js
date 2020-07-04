import {
    ANT_MARK
} from "antd/lib/locale-provider";
import {
    CHANGE_INPUT,
    AUTO_INCREMENT,
    DELETE,
    ASYNCHRONUS_DATA
} from './actionTypes'


const defaultState = {
    list: [

    ],
    multiple: 6,
    count:0

};
export default (state = defaultState, action) => {
    console.log(state, action);
    if (action.type == CHANGE_INPUT) {
        //声明局部变量实现深拷贝，吧state拷贝过来,就相当于有了一个对象
        let newState = JSON.parse(JSON.stringify(state));
        //通过action传递过来的值去改变
        newState.list.push(action.value);
        return newState;
    }

    if (action.type == AUTO_INCREMENT) {
        //声明局部变量实现深拷贝，吧state拷贝过来,就相当于有了一个对象
        let newState = JSON.parse(JSON.stringify(state));
        //通过action传递过来的值去改变
        newState.multiple = action.value;
        return newState;
    }

    if (action.type == DELETE) {
        //声明局部变量实现深拷贝，吧state拷贝过来,就相当于有了一个对象
        let newState = JSON.parse(JSON.stringify(state));
        //通过action传递过来的值去改变
        newState.list.splice(action.value, 1)
        return newState;
    }

    if (action.type == ASYNCHRONUS_DATA) {
        //声明局部变量实现深拷贝，吧state拷贝过来,就相当于有了一个对象
        let newState = JSON.parse(JSON.stringify(state));
        //通过action传递过来的值去改变
        newState.list = action.value
        console.log('newState', action.value);
        return newState;
    }


    if(action.type == 'REFERENCE_ERR'){
        //声明局部变量实现深拷贝，吧state拷贝过来,就相当于有了一个对象
        let newState = JSON.parse(JSON.stringify(state)); 
        newState.count = state.count + 1
        return newState;
    }
    return state;
};