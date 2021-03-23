import { useState } from 'react'

const AddActivity = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [complete, setComplete] = useState('false')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please Add Activity')
            return
        }

        onAdd({ title, date, complete })

        setTitle('')
        setDate('')
        setComplete(false)
    }


    return (
        <form className= 'add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Activity</label>
                <input type='text' placeholder='Enter Activity' value={title} onChange={(e) => setTitle(e.target.value) } />
            </div>
            <div className='form-control'>
                <label>Date & Time</label>
                <input type='text' placeholder='Enter Date & Time' value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
    
            <div className='form-control form-control-check'>
                <label>Complete</label>
                <input type='checkbox' checked={complete} value={complete} onChange={(e) => setComplete(e.currentTarget.checked)} />
            </div>
            <input type='submit' value="Save" className='btn btn-block'/>
        </form>
    )
}

export default AddActivity
