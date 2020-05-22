import React, { Component, Fragment } from "react";
import TodoItem from "./TodoItem";
import './style.css';
class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.delValueInList = this.delValueInList.bind(this)
        this.handleBtn = this.handleBtn.bind(this)
        this.changeInputValue = this.changeInputValue.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label className="haha" htmlFor="inputArea">请输入要完成的任务：</label>
                    <input className="inputs" id="inputArea" type="text" value={this.state.inputValue}
                           onChange={this.changeInputValue}/>
                    <button onClick={this.handleBtn}>添加</button>
                </div>
                <ul>
                    {
                        this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return <TodoItem key={index} content={item} index={index} delValueInList={this.delValueInList}/>
        })
    }

    changeInputValue(e) {
        const val = e.target.value
        this.setState(() => {
            return {
                inputValue: val
            }
        })
    }
    handleBtn() {
        this.setState((state) => ({
            list: [...state.list, state.inputValue],
            inputValue: ''
        }))
    }
    delValueInList(index) {
        this.setState((state) => {
            const list = [...state.list]
            list.splice(index, 1)
            return {list}
        })
    }
}
export default TodoList;