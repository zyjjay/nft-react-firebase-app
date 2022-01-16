import "./Modal.css"
import Signup from "../pages/Signup/Signup"
import Login from "../pages/Login/Login"

export default function Modal(props) {
    

    const { isLogin, show, onClose } = props

    // if(!show) {
    //     return null
    // }

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    {isLogin && <h2 className="modal-title">Log In</h2>}
                    {!isLogin && <h2 className="modal-title">Sign Up</h2>}
                </div>

                <div className="modal-body">
                    {isLogin &&
                        <Login />
                    }
                    {!isLogin &&
                        <Signup />
                    }
                </div>

                <div className="modal-footer">
                    <button onClick={onClose}>x</button>
                </div>
            </div>
        </div>
    )
}
