import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import Auth from "./components/Auth";

function Home() {
  const { logout, isAuthenticated } = useMoralis();
  let navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/login");
  }
  return (
    <Container maxWidth={"1400px"}>
      <Stack gap={2}>
        <Heading>Welcome!</Heading>
        <Button onClick={logout}>Logout</Button>
      </Stack>
    </Container>
  );
}

export default Home;
