import React, {useState,useEffect} from "react";
import { ThemeContext, themes } from "./Theme";
import Card from "./Card";

function App() {

  const [token, setToken] = useState()

  useEffect(()=>{
    setTimeout(()=>{
      setToken('09w80923hwre9809234h')
    },3000)
  },[setToken])

  return(
    <ThemeContext.Provider value={{...themes.primary, token}}>
        <Card />
    </ThemeContext.Provider>  
  )
}

export default App