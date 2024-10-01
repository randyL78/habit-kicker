import {Box, Container} from "@mui/material";
import Navbar from "../components/Navbar.tsx";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Box pt={15}>
        <Container>
          <h1>Dashboard</h1>
        </Container>
      </Box>
    </>

  )
}
