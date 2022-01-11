import { Link } from "react-router-dom"
// import openseaLogo from "../assets/opensea-logo.svg"
import { useNavigate } from "react-router-dom"
import "./Navbar.css"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Navbar() {

    const navigate = useNavigate()
    const { logout } = useLogout()
    const { user } = useAuthContext()

    return (
        <div className="navbar">
            <ul>
                <li className="home-logo">
                    {/* <img
                    className="opensea-logo"
                    style={{maxWidth: "3em"}}
                    src={openseaLogo}
                    alt="opensea-logo"
                    onClick={() => navigate('/')}
                    /> */}
                    <Link className="home-brand" to="/"><h1>NFTracker</h1></Link>
                    {/* <h1>NFTracker</h1> */}
                </li>

                {!user && 
                <>
                    <li className="login-btn">
                        <Link to="login">Login</Link>
                    </li>
                    <li className="signup-btn">
                        <Link to="signup">Sign up</Link>
                    </li>
                </>}

                {user && 
                <>
                    <li>
                        Hello! {user.displayName}
                    </li>
                    <li>
                        <button className="logout-btn" onClick={logout}>Log Out</button>
                    </li>
                </>
                }

            </ul>
        </div>
    )
}
