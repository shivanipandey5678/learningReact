import {Navigate, Route,Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from '../pages/Login';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


function PageRapper({children}){


 let {authDetails:{isLogin}}=useContext(AuthContext)
  if(!isLogin){
    return <Navigate to="/login"/>
 }
  return children
}

export default function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='/about' element=
            {<PageRapper><About/></PageRapper>}></Route>
            <Route path='/contact' element={<PageRapper><Contact/></PageRapper>}></Route>
            <Route path='/login' element={<Login/>}></Route>
        </Routes>
    )
}