import { SAVE_ITEMS, SET_ITEM_INDEX, SET_DATA_TYPE } from '../actions/constants'

const initialState = {
    items: [],
    selectedItemIndex: false,
    selectedDataType: false
}

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_ITEMS:
            return {
                ...state,
                items: action.payload
            }
        case SET_ITEM_INDEX:
            return {
                ...state,
                selectedItemIndex: action.payload
            }
        case SET_DATA_TYPE:
            return {
                ...state,
                selectedDataType: action.payload
            }
        default:
            return state
    }
}

export default itemReducer
