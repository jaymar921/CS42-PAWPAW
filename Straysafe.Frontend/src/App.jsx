import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path='*' element={<><p>Not found</p></>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
