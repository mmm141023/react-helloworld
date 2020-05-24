# React TodoList

## 数据双向绑定

> [个人博客](https://lbwsquare.com) 毛超颖

```
value = {this.state.inputValue}
// 更改this的指向
onChange = {this.handleInputValue.bind(this)}
```

## 设置propTypes和defaultProps
```react
import PropTypes from 'prop-types';

TodoItem.propTypes = {
    content: PropTypes.string,
    delValueInList: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    content: 'default'
}
```

### 当组件的state或者props发生改变时，会重新触发render函数渲染页面，达到页面和数据的双向绑定

### 当父组件触发render函数时，他的子组件也会触发render函数

## redux
-   首先定义store
-   往store中传入reducer
    + reducer是一个函数 两个参数: state action
    
```javascript
import {createStore} from "redux";
import reducer from "./reducer";
const store = createStore(reducer)

export default store
```

```javascript
const initState = {
    inputValue: '',
    list: ['maochaoying','tianheng']
}
export default (state = initState, action) => {
    return state
}
```