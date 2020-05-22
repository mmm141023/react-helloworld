import React, {Component} from "react";
import PropTypes from 'prop-types';
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
TodoItem.propTypes = {
    content: PropTypes.string,
    delValueInList: PropTypes.func,
    index: PropTypes.number
}
export default TodoItem