
import { useState } from 'react'
import Header from './components/Header'
import Activities from './components/Activities'
import AddActivity from './components/AddActivity'
import './App.css';

const App = () => { 
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [activities , setActivities] = useState([
  {
      id: 1,
      title: 'Go to the store',
      day: 'March 14th at 12:30pm',
      reminder: true,
      complete: true,

  },
  {
      id: 2,
      title: "Finish React Project",
      day: 'March 24th at 2:00pm',
      reminder: true,
      complete: false,
  },
  {
      id: 3,
      title: "Hair appointment",
      day: 'April 14th at 2:00pm',
      reminder: true,
      complete: false,
  },
])

const addActivity = (activity) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newActivity = { id, ...activity}
  setActivities([...activities, newActivity])
}

const deleteActivity = (id) => {
  setActivities(activities.filter((activity => activity.id !== id) ))
}

const toggleReminder = (id) => {
  setActivities(activities.map((activity) => activity.id === id ? {...activity, reminder: !activity.reminder} : activity))
}

const toggleComplete = (id) => {
  setActivities(activities.map((activity) => activity.id === id ? {...activity, complete: !activity.complete} : activity))
}

  return (
  <div className='container'>
    <Header onAdd={() => setShowAddActivity(!showAddActivity)} showAdd={showAddActivity} /> 
    {showAddActivity && <AddActivity onAdd={addActivity} />}
    {activities.length > 0 ? <Activities activities={activities} onDelete= {deleteActivity} onToggle= {toggleReminder}  onClick= {toggleComplete} /> : 'No Activities, Add New Activity'}
  </div>
  )
}

export default App;
