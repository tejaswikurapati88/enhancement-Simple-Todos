import {Routes, Route} from 'react-router-dom'
import SimpleTodos from './components/SimpleTodos'
import LoginPage from './components/LoginPage'

import './App.css'

const App = () => (
  <Routes>
    <Route exact path="/login" element={<LoginPage />} />
    <Route path="/" element={<SimpleTodos />} />
  </Routes>
)

export default App
