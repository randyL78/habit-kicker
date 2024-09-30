import {BottomNavigation} from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

export default function BottomNavbar({children}: Props) {
  return (
    <BottomNavigation showLabels sx={{ display: { sm: 'none' }, position: 'fixed', right: 0, left: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
      {children}
    </BottomNavigation>

  )
}
