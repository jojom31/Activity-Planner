


const [showAddActivity, setShowAddActivity] = useState(false)
  const [activities , setActivities] = useState([
  {
      id: 1,
      title: 'Go to the store',
      date: 'March 14,2021 12:30pm',
      complete: true,

  },
  {
      id: 2,
      title: "Finish React Project",
      date: 'March 24,2021 2:00pm',
      reminder: true,
      complete: false,
  },
  {
      id: 3,
      title: "Hair appointment",
      date: 'April 14, 2021 2:00pm',
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



const clickComplete = (id) => {
  setActivities(activities.map((activity) => activity.id === id ? {...activity, complete: !activity.complete} : activity))
}

  return (
  <div className='container'>
    <Header onAdd={() => setShowAddActivity(!showAddActivity)} showAdd={showAddActivity} /> 
    {showAddActivity && <AddActivity onAdd={addActivity} />}
    {activities.length > 0 ? <Activities activities={activities} onDelete= {deleteActivity} onToggle= {clickComplete}  /> : 'No Activities, Add New Activity'}

  </div>
  )