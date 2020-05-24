import {CHANGE_INPUT_VALUE, HANDLE_ADD_ITEM, DEL_ITEM} from './actionTypes'
export const changeInputVal = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const handleAddItem = () => {
    return {
        type: HANDLE_ADD_ITEM
    }
}

export const delItem = (value) => ({
    type: DEL_ITEM,
    value
})