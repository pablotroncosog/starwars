import './styles/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import injectContext from "./store/Context.js";

import { Navbar } from './components/Navbar'

import { Menu } from './components/Menu'
import { Footer } from "./components/Footer"
import { Main } from "./components/Main"

import { SingleCharacter } from "./views/SingleCharacter"
import { SinglePlanet } from "./views/SinglePlanet"
import { Characters } from './views/Characters'
import { Planets } from './views/Planets'

function App() {
  return <div className='bg-dark'>
    <Navbar />
    <div className='row'> 
        <BrowserRouter>
          <div className='col-2 '> <Menu />  </div>
          <div className='col-10 g-4 mt-2 p-2'> 
          <Routes>
            <Route path='/' element={<Main />}> </Route>
            <Route path='/personajes' element={<Characters />}> </Route>
            <Route path='/planets' element={<Planets />}> </Route>
            <Route path='/personaje/:id' element={<SingleCharacter />}> </Route>
            <Route path='/planeta/:id' element={<SinglePlanet />}> </Route> 
          </Routes> </div>
        </BrowserRouter>
    
    </div>


    <Footer />
  </div>
}


export default injectContext(App);

