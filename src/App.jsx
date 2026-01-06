
import {Routes, Route ,Router, Navigate} from 'react-router-dom'
import Home from './pages/Home.jsx'
import BuyCredit from './pages/BuyCredit.jsx'
import Result from './pages/Result.jsx'

function App() {
  return (
   <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>
   </div>
  )
}

export default App
