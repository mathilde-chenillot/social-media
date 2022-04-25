import { Box } from '@mui/material';
import React from 'react'

export const SideBar = () => {
  return (
    <Box bgcolor="skyblue" flex={1} p={2} sx={{ display: { xs: "none", sm: "block"}}}>SideBar</Box>
  )
}

export default SideBar;

// p = padding

// breakpoints for responsive (mui doc)
// sx = extra small breakpoints