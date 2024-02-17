import { Box} from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MaterialUISwitch from "../styles/MuiSwitch";
import {
  AccountBox,
  Article,
  Group,
  Home,
  Person,
  Settings,
  Storefront,
  
} from "@mui/icons-material";

export default function MyList({ setmyMOde, theme , showmenu}) {
  const myList = [
    { title: "Homepage", icon: <Home /> },
    { title: "Pages", icon: <Article /> },
    { title: "Groups", icon: <Group /> },
    { title: "Marketplace", icon: <Storefront /> },
    { title: "Friends", icon: <Person /> },
    { title: "Settings", icon: <Settings /> },
    { title: "Profile", icon: <AccountBox /> },
  ];
  return (
    <Box
    className="mylist"
      sx={{
       
        minWidth:"222px",
        flexGrow: "1.1",
        display: { xs: showmenu, md: "block" },
        bgcolor:theme.palette.favColor.main
      }}
    >
      <List sx={{ position: "fixed" }}>
        {myList.map((item) => {
          return (
            <ListItem key={item.title} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemIcon>
            <MaterialUISwitch
              onChange={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );

                setmyMOde(theme.palette.mode === "light" ? "dark" : "light");
              }}
              sx={{ mt: 1 ,mr:1}}
              defaultChecked
            />
          </ListItemIcon>
          <ListItemText
            sx={{ textTransform: "capitalize" }}
            primary={theme.palette.mode}
          />
        </ListItem>
      </List>
      
    </Box>
  );
}
