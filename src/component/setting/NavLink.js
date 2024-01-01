import Footer from '../footer/Footer.js';
import {Routes,Route } from "react-router-dom";
import Login from '../../pages/Login';
import Dashboard from '../../pages/Dashboard.js';
import {useLocation}  from 'react-router-dom';
import  {getStorageItem} from '../../helper/helper';
import {  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  Header from  '../Header/Header';
function NavLink() {
  const navigate = useNavigate();
  const locationUrl =  useLocation();
  const userRoutes = ['/login','/register'];


  useEffect(() => {
    
  
   const storedUser = getStorageItem("userName");
    if (storedUser) {
  
      if(locationUrl.pathname.replace(/^\/+|\/+$/g ,'') === 'login'){
        navigate("/dashboard");
      }
    //  navigate("/Dashboard");
    } else{
      navigate("/login");
    }
});
  return (
   
    <>
    { !userRoutes.includes(locationUrl.pathname)  ?  <Header /> :''}
    <Routes>
      <Route path='/login'  element={<Login /> } />
      <Route path='/dashboard' element={<Dashboard /> } />
    </Routes>
    { !userRoutes.includes(locationUrl.pathname) ?  <Footer /> :''}
    </>
  )
}

export default NavLink;