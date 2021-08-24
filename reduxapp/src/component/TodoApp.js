import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, clearList } from '../action'
import './TodoApp.css'

const TodoApp = () => {
    const [data, setData] = useState('')
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <h1>
                    ToDo App
                </h1>
            </div>
            <div>
                <input type="text" value={data} onChange={(event) => setData(event.target.value)} />
                <button onClick={() => dispatch(addTodo(data), setData(''))}>Add I tem</button>

            </div>
            <div>
                {list.map((value, index) => {
                    return (
                        <div style={{ display: "flex" }} key={index}>
                            <h3 >{value.data}</h3>
                            <button onClick={() => dispatch(deleteTodo(value.id))}>delete item</button>
                        </div>
                    )
                })}

            </div>
            <div >
                <button onClick={() => dispatch(clearList())}>Clear List</button>
            </div>
        </div>
    )
}

export default TodoApp