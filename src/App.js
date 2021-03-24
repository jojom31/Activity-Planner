
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Activities from './components/Activities'
import AddActivity from './components/AddActivity'
import './App.css';

const App = () => { 
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [activities , setActivities] = useState([])

  useEffect(() => {
    const getActivities = async () => {
      const activitiesServer = await fetchActivities()
      setActivities(activitiesServer)

    }
    
    
    getActivities()
  }, [])

  const fetchActivities = async () => {
    const res = await fetch('http://localhost:3003/activities')
    const data = await res.json()

    return data
  }

const addActivity = async (activity)  => {
  const res = await fetch('http://localhost:3003/activities', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(activity)
  })
  const data = await res.json()

  setActivities([...activities, data])
}

const deleteActivity = async (id) => {
  await fetch(`http://localhost:3003/activities/${id}`, {

    method: `DELETE`
  })
  setActivities(activities.filter((activity => activity.id !== id) ))
}



const clickComplete = async (id) => {
  setActivities(activities.map((activity) => activity.id === id ? {...activity, complete: !activity.complete} : activity))
}

  return (
  <div className='container'>
    <Header onAdd={() => setShowAddActivity(!showAddActivity)} showAdd={showAddActivity} /> 
    {showAddActivity && <AddActivity onAdd={addActivity} />}
    {activities.length > 0 ? <Activities activities={activities} onDelete= {deleteActivity} onToggle= {clickComplete}  /> : 'No Activities, Add New Activity'}
  </div>
  )
}

export default App;
