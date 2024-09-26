function AddTask({ handleSubmit, editid, task, setTask }) {
  console.log(editid)
  return (
    <section className='flex justify-center items-center mt-10'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col sm:flex-row bg-white gap-4 shadow-md rounded-lg p-4 sm:p-6 max-w-xl w-full'
      >
        <input
          type='text'
          name='task'
          value={task}
          autoComplete='off'
          placeholder='add a task'
          maxLength='40'
          onChange={(e) => setTask(e.target.value)}
          className='flex-grow border-2 border-gray-400 rounded-md p-2 outline-non focus:ring-indigo-500 transition-all duration-200'
        />
        <button
          type='submit'
          className='bg-indigo-500 border-2 border-gray-300 hover:bg-indigo-600 text-white font-semibold rounded-md px-6 py-2 transition-all duration-200'
        >
          { editid ? 'update' : 'add'}
        </button>
      </form>
    </section>
  )
}

export default AddTask
