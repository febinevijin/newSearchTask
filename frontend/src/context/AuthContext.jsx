// import axios from "axios";
import axios from '../utils/axios'
import Toast from 'react-bootstrap/Toast';
import { createContext, useState } from "react";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [keyword, setKeyWord] = useState();
  const [finalValue, setFinalValue] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(keyword);

    try {
      const config = {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.get(
        `/data/searchData/?search=${keyword}`,
        config
      );
      console.log(data);
      // if(data)
      setFinalValue(data);
    } catch (error) {
      console.log(error);
      alert('Not authorized, Please login first')
    }
  };

  const contextData = {
    submitHandler,
    setKeyWord,
    finalValue,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
