import { useState } from 'react'

const AddActivity = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('false')
    const [complete, setComplete] = useState('false')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please Add Activity')
            return
        }

        onAdd({ title, day, reminder, complete })

        setTitle('')
        setDay('')
        setReminder(false)
        setComplete(false)
    }


    return (
        <form className= 'add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Activity</label>
                <input type='text' placeholder='Enter Activity' value={title} onChange={(e) => setTitle(e.target.value) } />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Enter Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check' >
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Complete</label>
                <input type='checkbox' checked={complete} value={complete} onChange={(e) => setComplete(e.currentTarget.unchecked)} />
            </div>
            <input type='submit' value= 'Save Activity' className='btn btn-block'/>
        </form>
    )
}

export default AddActivity
