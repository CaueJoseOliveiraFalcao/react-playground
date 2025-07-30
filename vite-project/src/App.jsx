import { useState } from 'react'
import Header from './Header'
import InputwText from './assets/InputwText'
import {createBrowserRouter ,  createRoutesFromElements , RouterProvider , Route} from 'react-router-dom'
import Home from './pages/Home';

const browserRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' >
    <Route index element={<Home/>}/>
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
