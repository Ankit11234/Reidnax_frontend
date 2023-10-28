import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


export const mainListItems = (
  <React.Fragment>
      <a style={{textDecoration:'none',color:'black'}} href="/dashboard">
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>

      <ListItemText primary="Analytics" />
    </ListItemButton>
      </a>
        <a style={{textDecoration:'none',color:'black'}} href="/data"  >
    <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>

         <ListItemText primary="Data" />
    </ListItemButton>
      </a>
  
  </React.Fragment>
);


