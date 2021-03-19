import { FaTimesCircle } from 'react-icons/fa'

const Activity = ({ activity, onDelete, onToggle }) => {
    return (
        <div className= {`activity ${activity.complete ? 'complete' : ''}`  }onDoubleClick= {() => onToggle(activity.id)}>
            <h3>{activity.title}<FaTimesCircle style={{color: 'red'}} onClick={() => onDelete(activity.id)}  /></h3>
            <p>{activity.day}</p>
        </div>
    )
}

export default Activity
