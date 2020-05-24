import {CHANGE_INPUT_VALUE, HANDLE_ADD_ITEM, DEL_ITEM} from './actionTypes'
const initState = {
    inputVal: 'mmm',
    data: ['maochaoying']
}
export default (state = initState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputVal = action.value
            return newState
        case HANDLE_ADD_ITEM:
            newState.data.push(newState.inputVal)
            return newState
        case DEL_ITEM:
            newState.data.splice(action.value, 1)
            return newState
        default:
            break;
    }
    return state
}