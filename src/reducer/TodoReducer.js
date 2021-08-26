const initializedData = {
    list: []
}


const todoReducers = (state = initializedData, action) => {
    console.log("todoReducers List", state)
    console.log("todoReducers action", action)

    switch (action.type) {
        case "ADD_LIST":
            const { id, data } = action.payload
            // console.log("action.payload data ", action.payload)
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case "DELETE_LIST":
            const newList = state.list.filter((item) => item.id !== action.itemID)
            return {
                ...state,
                list: newList
            }
        case "ALL_LIST_ITEM_CLEAR":
            return {
                ...state,
                list: []
            }
        default: return state;
    }

}
console.log("todo useReducer ", initializedData.list)
export default todoReducers