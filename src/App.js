import './App.css'
import Board from './components/board'
import Start from './components/start'
import {Routes, Route} from 'react-router-dom'



function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/board' element={<Board/>}/>

      </Routes>
    </>
    )

}

export default App;
