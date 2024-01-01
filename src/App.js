import React, { useEffect } from 'react';
import {BrowserRouter } from "react-router-dom";
import NavLink from './component/setting/NavLink';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = process.env.PUBLIC_URL + '/assets/js/main.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <>
    <BrowserRouter>
       <NavLink />
    </BrowserRouter>
    </>
  );
}

export default App;
