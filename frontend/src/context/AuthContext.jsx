import axios from 'axios'
import {createContext, useState} from 'react'


const AuthContext = createContext()
export default AuthContext

export const AuthProvider = ({children} )=>{
    const [keyword, setKeyWord] = useState()
    const [finalValue, setFinalValue] = useState()
    const submitHandler = async (e) =>{

      e.preventDefault()
      console.log(keyword)

      try {
  
        const config = {
         
          headers: {
             
              'Content-Type': 'application/json'
          }
        }
  
        const {data} = await axios.get(`http://localhost:4000/api/data/searchData/?search=${keyword}`,config)
        console.log(data );
        setFinalValue(data)
      } catch (error) {
        console.log(error);
      }
    }

    const contextData = {
        submitHandler,
        setKeyWord,
        finalValue,
    }

return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
)

}