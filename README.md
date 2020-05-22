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