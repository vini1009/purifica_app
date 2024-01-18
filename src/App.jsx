import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHeader from './Components/MainHeader.jsx';

import './assets/css/fonts.min.css'
import './assets/css/bootstrap.min.css'
import './assets/css/atlantis2.min.css'
// import './assets/css/atlantis.min.css'
import './assets/css/demo.css'
import LogoHeader from './Components/Header/LogoHeader';

import Logo from '/img/logo_white.png';
import Home from './Pages/Home.jsx';
import Consult from './Pages/Consult.jsx';
import ResultConsult from './Pages/ResultConsult.jsx';

function App() {
  const [count, setCount] = useState(0)

    return (
    <>
      <div className="wrapper horizontal-layout-3 bg-green">

        <div className="main-panel d-flex flex-row align-items-center">
          <div className="container">
            <div className="page-inner text-center">

              <BrowserRouter>
                <Routes>
                  <Route path='/app/login' element={<Home />}/>
                  <Route path='/app/aplicativo' element={<Consult />}/>
                  <Route path='/app/resultados' element={<ResultConsult />}/>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
