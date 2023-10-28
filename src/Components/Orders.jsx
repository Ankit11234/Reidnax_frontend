import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { useState,useEffect } from "react";
import axios from 'axios';
import {BASE_URL} from './Util.js';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {


  const [datas,setDatas]=useState();

  useEffect(()=>{
    const getData=async()=>{
      try {
        const res= await axios.get(`${BASE_URL}api/data`);
        const data = await res.data;
        console.log("data is order.js",data.data);
        setDatas(data.data);
        
      } catch (error) {
        console.log("error in ",error);
      }
    }
    getData();
    

  },[]);

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {datas?.length>0 && datas.map((row) => (
            <TableRow key={row.Name.name}>
              <TableCell>{row.Date.default}</TableCell>
              <TableCell>{row.Name.name}</TableCell>
              <TableCell>{row.shipTo.name}</TableCell>
              <TableCell>{row.payment.method}</TableCell>
              <TableCell align="right">{`${row.Amount.price}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
