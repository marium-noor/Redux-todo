import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, editTodo, updateTodo} from '../feature/todo/todoSlice' 

function AddTodo() {
    const [input, setInput ] = useState('')
    const dispatch = useDispatch()
    const editTodo = useSelector(state => state.edit)

    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim() == '') {
            alert('Please add a consise todo')
        } else {
          editTodo.id === null ? dispatch(addTodo(input)) : dispatch(updateTodo({id: editTodo.id, text:input}))
            setInput('') 
        }
    }

    useEffect(() => {
      setInput(editTodo.text)
    }, [editTodo])

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 my-8 flex justify-center">

        <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg"
      >
        {editTodo.id === null ? 'Add Todo' : 'Update Todo'}
      </button>
      
    </form>
  )
}

export default AddTodo