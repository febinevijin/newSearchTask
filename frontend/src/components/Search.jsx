import React, { useContext, useState } from "react";

import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Button, Dropdown } from "react-bootstrap";
import "./Search.css";

const Search = ({ data }) => {
  const { submitHandler, setKeyWord } = useContext(AuthContext);
  console.log(data);

  const [selectValue, setSelecttValue] = useState();

  return (
    <div>
      <form onSubmit={submitHandler} className="d-flex">
        <input
       className="w-100"
          type="text"
          list="cars"
          onChange={(e) => setKeyWord(e.target.value)}
        />
        <datalist id="cars">
          {data && data.map((item) => <option>{item.Name}</option>)}
        </datalist>

        <Button className="" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default Search;
