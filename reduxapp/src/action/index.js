export const addTodo = (data) => {
    console.log("action data ", data)
    return {
        type: "ADD_LIST",
        payload: {
            id: new Date().getTime().toString(),
            data: data

        }
    }

}

export const deleteTodo = (itemID) => {
    return {
        type: "DELETE_LIST",
        itemID
    }
}
export const clearList = () => {
    return {
        type: "ALL_LIST_ITEM_CLEAR"
    }
}