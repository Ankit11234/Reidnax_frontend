import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export const mainListItems = (
  <React.Fragment>
    <Link style={{textDecoration:'none',color:'black'}} to="/dashboard">
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText primary="Analytics" />
    </ListItemButton>
    </Link>
    <Link style={{textDecoration:'none',color:'black'}} to="/data" >
    <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>

         <ListItemText primary="Data" />
    </ListItemButton>
    </Link>
  
  </React.Fragment>
);


