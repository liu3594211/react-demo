//compose用来增强函数
import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
//saga中间件的使用
// import createSagaMiddleware from "redux-saga";
import {
    mySaga
} from './sagas'

//先判断变量名，有没有这个方法，有就调用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

/*
 thunk中间件的使用
// const enhancer = composeEnhancers(applyMiddleware(thunk));
*/
const enhancer = composeEnhancers(applyMiddleware(thunk));

//saga中间件的配置
// const sagaMiddleware = createSagaMiddleware();
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));



//生成createStore()方法然后暴露出去,引入参数，
const store = createStore(reducer, enhancer);
// sagaMiddleware.run(mySaga)
export default store;