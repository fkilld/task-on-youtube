import { useState } from 'react'

function ShowTask({ taskList, setTaskList, handleEdit, handleDelete }) {
  const [deletingTask, setDeletingTask] = useState(null)
  const handleDeleteWithAnimation = (id) => {
    setDeletingTask(id)
    setTimeout(() =>{
      handleDelete(id)
    },500)
  }

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold text-indigo-600'>
          tasks ({taskList.length})
        </h2>
        <button
          className='text-red-600 hover:text-red-700 font-semibold'
          onClick={() => setTaskList([])}
        >
          clear all
        </button>
      </div>
      <ul className='space-y-4'>
        {taskList.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-4 bg-gray-100 transition-all duration-500 rounded-lg shadow-md ${
              deletingTask === task.id ? 'animate-fadeOut' : 'animate-fadeIn'
            } `}
          >
            <div>
              <p className='font-medium text-gray-800'>{task.name}</p>
              <p className='text-sm text-gray-500'>{task.time}</p>
            </div>
            <div>
              <button onClick={() => handleEdit(task.id)}>
                <i className='bi bi-pencil-square'></i>
              </button>
              <button onClick={() => handleDeleteWithAnimation(task.id)}>
                <i className='bi bi-trash'></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowTask
