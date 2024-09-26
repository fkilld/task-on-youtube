import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import { useState, useEffect } from 'react'
import './App.css'
function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('tasklist')) || []
  )
  const [editid, setEditid] = useState(0)
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'medium'
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    if (editid) {
      const date = new Date()
      const selectedTask = taskList.find((task) => task.id === editid)
      const updatedTask = taskList.map((e) => {

        e.id === selectedTask.id
          ? {
              id: e.id,
              name: task,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : { id: e.id, name: e.name, time: e.time }
      })
      setTaskList(updatedTask)
      setEditid(0)
      setTask('')
      return
    }

    // if (editid) {
    //   const date = new Date()
    //   const selectedTask = taskList.find((task) => task.id === editid)
    //   const updateTask = taskList.map((e) =>
    //     e.id === selectedTask.id
    //       ? {
    //           id: e.id,
    //           name: task,
    //           time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    //         }
    //       : { id: e.id, name: e.name, time: e.time }
    //   )
    //   setTaskList(updateTask)
    //   setEditid(0)
    //   setTask('')
    //   return
    // }
    if (task) {
      const date = new Date()
      setTaskList([
        ...taskList,
        {
          id: date.getTime(),
          name: task,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        },
      ])
      setTask('')
    }
  }
  const handleEdit = (id) => {
    const selectedTask = taskList.find((task) => task.id === id)
    setTask(selectedTask.name)
    setEditid(id)
  }
  const handleDelete = (id) => {
    const updatedTask = taskList.filter((task) => task.id !== id)
    setTaskList(updatedTask)
  }
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }, [taskList])
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  return (
    <div
      className={`App min-h-screen flex flex-col justify-center items-center bg-gray-50 ${theme}`}
    >
      <div className='container max-w-2xl mx-auto py-10 px-6 shadow-lg bg-white rounded-lg'>
        <Header setTheme={setTheme} theme={theme}>
          LearnWithAzad
        </Header>
      </div>

      <div className='my-8'>
        <AddTask
          handleSubmit={handleSubmit}
          editid={editid}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          taskList={taskList}
          setTaskList={setTaskList}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default App
