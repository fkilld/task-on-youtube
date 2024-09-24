
import Header from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'
import {useState,useEffect} from 'react'

function App() {
  const [tasks, setTasks] = useState()
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) || [])
  const [editid, setEditid] = useState(0)
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'medium')

  const HandleSubmit = event => {}
  const handleEdit = id => {}
  const handleDelete = (id) => {}
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
        <Header setTheme={setTheme} theme={theme} >
          LearnWithAzad
        </Header>
      </div>

      <AddTask />
      <ShowTask />
    </div>
  )
}

export default App
