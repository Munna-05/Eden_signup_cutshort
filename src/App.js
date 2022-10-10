
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LandingPage from './Pages/LandingPage';
import { useParams } from 'react-router-dom'



//pages


function App() {
  const param = useParams()
  const one = '1'
  const two = '2'
  const three = '3'
  const four = '4'

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage page={one} />} />
          <Route exact path='/2' element={<LandingPage page={two} />} />
          <Route exact path='/3' element={<LandingPage page={three} />} />
          <Route exact path='/4' element={<LandingPage page={four} />} />
          <Route exact path='*' element={<LandingPage page={one} />} />
          

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
