import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react'

export const SideBar = () => {
  return (
    <Box
        flex={1}
        p={2}
        sx={{ display: { xs: "none", sm: "block"}}}
    >
        <List>
            {/* HomePage */}
            <ListItem disablePadding>
                <ListItemButton components="a" href="#home">
                    <ListItemIcon>
                        <Home />
                    </ListItemIcon>
                    <ListItemText primary="Homepage" />
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Article />
                    </ListItemIcon>
                    <ListItemText primary="Pages" />
                </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Group />
                    </ListItemIcon>
                    <ListItemText primary="Groups" />
                </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Storefront />
                    </ListItemIcon>
                    <ListItemText primary="Marketplace" />
                </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Friends" />
                </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <AccountBox />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <ModeNight />
                    </ListItemIcon>
                    <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
                </ListItemButton>
          </ListItem> */}
        </List>
    </Box>
  )
}

export default SideBar;

// p = padding

// breakpoints for responsive (mui doc)
// sx = extra small breakpoints