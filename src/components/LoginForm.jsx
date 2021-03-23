import {useState} from 'react'

const LoginForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');






        return (
                <div>
                    
                    
                    <form>
                        <label>
                            First Name:
                            <input type="text" value=""/>
                        </label>
                        <br/>
                        <label>
                            Last Name:
                            <input type="text" value="" />
                        </label>
                        <br/>
                        <label>
                            Username:
                            <input type="text" value="" />
                        </label>
                        <br/>
                        <label>
                            Password:
                            <input type="password" value="" />
                            <br/>
                        </label>
                        <input type="submit" value="" />
                    </form>
                </div>
            )
        }

export default LoginForm;