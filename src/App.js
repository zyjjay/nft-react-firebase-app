import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { useAuthContext } from './hooks/useAuthContext'
import Vision from './components/Vision'
import Footer from './components/Footer'

export default function App() {

  const { authIsReady, user } = useAuthContext()

  return (
    <div className='App'>
      {authIsReady &&
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={
          <>
            {user && <Home />}
            {!user && <Vision />}
          </>
          }/>
          {/* <Route path="/login" element={
            <>
              {user && <Navigate to="/" />}
              {!user && <Login />}
            </>
          } />
          <Route path="/signup" element={
            <>
              {user && <Navigate to="/" />}
              {!user && <Signup />}
            </>
          } /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    }
    </div>
  )
}
