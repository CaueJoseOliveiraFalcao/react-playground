import { useState } from 'react'
import Header from './Header'
import InputwText from './assets/InputwText'
import {createBrowserRouter ,  createRoutesFromElements , RouterProvider , Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index={true} element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/register' element={<Register/>}/>
  </Route>
));

function App() {

  return (
    <>
    <RouterProvider router={browserRouter} />
    </>
  )
}


export default App
