import styles from './Signup.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignup } from '../../hooks/useSignup'

export default function Signup() {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signup, isPending, error } = useSignup()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signup(displayName, email, password)
            navigate('/')
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            {/* <h2>Sign Up</h2> */}
            <label>
                <span>Display Name:</span>
                <input 
                type="text"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                />
            </label>
            <label>
                <span>Email:</span>
                <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
            </label>
            <label>
                <span>Password:</span>
                <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </label>

            { !isPending && <button className='btn'>Sign Up</button> }
            { isPending && <button className='btn' disabled>Loading</button> }
            { error && <p style={ {color: "#BA5C12"} }>{error}</p> }
        </form>
    )
}
