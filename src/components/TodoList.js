import React, { Component,Fragment } from "react";
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import '../css/index.css'
import store from "../store";
import { changeInputVal, handleAddItem, delItem } from '../store/actionCreators'
class TodoList extends Component{
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.whenStateChange = this.whenStateChange.bind(this)
        this.hahandleAddItem = this.handleAddItem.bind(this)
        store.subscribe(this.whenStateChange)
    }

    render() {
        return (
            <Fragment>
                <Input onChange={this.handleInputChange} value={this.state.inputVal} placeholder="please write todo info" className="todoinfo" />
                <Button onClick={this.handleAddItem} type="primary">提交任务</Button>
                <List className="list-width"
                    header={<div>任务列表</div>}
                    bordered
                    dataSource={this.state.data}
                    renderItem={(item, index)=> (
                        <List.Item className="item">
                            {item}
                            <Button onClick={this.delItem.bind(this,index)}  type="link">删除</Button>
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
    handleInputChange(e) {
        const action = changeInputVal(e.target.value)
        store.dispatch(action)
    }
    whenStateChange () {
        this.setState(store.getState())
    }
    handleAddItem() {
        const action = handleAddItem()
        store.dispatch(action)
    }
    delItem(index) {
        const action = delItem(index)
        store.dispatch(action)
    }
}

export default  TodoList
