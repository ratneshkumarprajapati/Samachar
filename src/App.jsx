

import { Route, Routes } from 'react-router-dom'

import Navbar from './component/common/Navbar'
import Home from './pages/Home'
import InternationalNews from './pages/InternationalNews'
import HistoryOfToday from './pages/HistoryOfToday'
import Quiz from './pages/Quiz'

function App() {
  

  return (
    <div className='w-full pb-10 flex flex-col justify-start items-center min-h-screen bg-richblack-800 '>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/internationalcurrentaffairs' element={<InternationalNews></InternationalNews>}></Route>
      <Route path='/historyoftoday' element={<HistoryOfToday></HistoryOfToday>}></Route>
      <Route path='/quiz' element={<Quiz></Quiz>}></Route>

    </Routes>
   
    </div>
  )
}

export default App
