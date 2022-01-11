import "./Login.css"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useLogin } from "../../hooks/useLogin"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <label>
                <span>Email:</span>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>

            <label>
                <span>Password:</span>
                <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>

            {isPending && <button className='btn' disabled>Loading</button>}
            {!isPending && <button className='btn'>Login</button>}
            {error && <p>{error}</p>}

        </form>
    )
}
