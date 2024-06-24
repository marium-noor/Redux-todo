import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {editTodo, removeTodo} from '../feature/todo/todoSlice'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <ul className="list-none flex justify-center flex-col items-center">
        {todos.map((todo) => (
        <li
            key={todo.id}
            className='my-3 w-2/3 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded '
        >
             <div className='text-white'>{todo.text}</div>
            {/* <input 
            type="text" 
            value={todo.text} 
            readOnly 
            className='outline-none bg-zinc-800 text-white'/> */}
            <div className='flex gap-3'>
                <button
                    onClick={() => dispatch(editTodo({id: todo.id, text: todo.text}))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                    >
                        Edit
                </button>
                <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                >
                <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos