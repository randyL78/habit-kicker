import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";

export default function Layout() {
  return (
    <Box sx={{
      overflowX: 'auto',
      position: 'fixed',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "#fdf",
      background: 'linear-gradient(25deg, rgba(68,82,105,.3) 0%, rgba(225,230,250,.8) 20%, rgba(215,220,246,.8) 40%, rgba(68,82,105,.6) 100%)'
    }}>
      <Outlet />
    </Box>
  )
}
