import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, clearList } from '../action'
import './TodoApp.css'

const TodoApp = () => {
    const [data, setData] = useState('')
    const list = useSelector((state) => state.todoReducers.list)
    const dispatch = useDispatch()
    const creatList = (e) => { e.preventDefault(); dispatch(addTodo(data), setData('')) }

    

    return (
        <div className="mainContainer">

            <div>
                <p><b><i>Note</i></b> : if internet is not connected then <b>Add</b> and <b>delete</b> icon will not show use <b>"Enter button for add list"</b> </p>
                <h1>
                    ToDo App
                </h1>
            </div>
            <div>

                <div>
                    <form className="form" onSubmit={creatList}>
                        <input type="text" className="inputfield" value={data} onChange={(event) => setData(event.target.value)} />
                        <i class="fas fa-plus-square" onClick={() => dispatch(addTodo(data), setData(''))}></i>
                    </form>

                </div>
                <div>
                    <ol className="orderedList">

                        {list.map((value, index) => {
                            return (
                                <div className="listItemBox" key={index}>
                                    <li className="listItem" >{value.data}</li>
                                    <i class="fas fa-trash-alt" onClick={() => dispatch(deleteTodo(value.id))}></i>
                                </div>
                            )
                        })}

                    </ol>
                </div>
                <div className="clearListBtn" >
                    <button  onClick={() => dispatch(clearList())}>Clear List</button>
                </div>
            </div>
        </div>
    )
}

export default TodoApp