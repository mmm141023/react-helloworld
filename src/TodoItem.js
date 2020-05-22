import React, {Component} from "react";

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.del = this.del.bind(this);
    }
    render() {
        const {content} = this.props
        return (
            <div onClick={this.del}>{content}</div>
        )
    }
    del() {
        const {delValueInList, index} = this.props
        delValueInList(index)
    }
}

export default TodoItem