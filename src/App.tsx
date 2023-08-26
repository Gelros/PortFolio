import React, { useEffect } from 'react';
import Pages from "./pages/index"
import AOS from "aos";
import "aos/dist/aos";

function App() {
  useEffect(() => {
    AOS.init({duration:500})
  }, [])
  return (
    <div>  
      <Pages/>
    </div>
  );
}

export default App;
