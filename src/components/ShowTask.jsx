import { useState } from 'react'

function ShowTask({ taskList, setTaskList, handleEdit, handleDelete }) {
  const [deletingTask, setDeletingTask] = useState(false)
  const handleDeleteWithAnimation = (id) => {}

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
        <li className={`flex justify-between items-center p-4 bg-gray-100 transition-all duration-500 rounded-lg shadow-md `}>1</li>
        <li>2</li>
      </ul>
    </div>
  )
}

export default ShowTask
