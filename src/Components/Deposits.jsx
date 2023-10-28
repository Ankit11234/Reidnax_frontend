import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { useState,useEffect } from "react";
import axios from 'axios';
import {BASE_URL} from './Util.js';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {

  const [data,setData]=useState();

  useEffect(()=>{
    const getData=async()=>{
      try {
        const res= await axios.get(`${BASE_URL}api`);
        const data = await res.data;
        console.log("base url is",BASE_URL)
        setData(data.analytic);
        
      } catch (error) {
        console.log("error in ",error);
      }
    }
    getData();
    

  },[]);

  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {data?.Amount.amount}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
       on  {data?.Date.default}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
