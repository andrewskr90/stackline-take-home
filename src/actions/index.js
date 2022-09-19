import { SAVE_ITEMS, SET_ITEM_INDEX, SET_DATA_TYPE } from "./constants"

export const saveItems = (items) => {
    return {
        type: SAVE_ITEMS,
        payload: items
    }
}

export const setItemIndex = (idx) => {
    return {
        type: SET_ITEM_INDEX,
        payload: idx
    }
}

export const setDataType = (dataType) => {
    return {
        type: SET_DATA_TYPE,
        payload: dataType
    }
}
