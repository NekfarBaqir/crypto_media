import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useMoralis } from "react-moralis";
import { Link, useNavigate } from "react-router-dom";
import AlertComponent from "./Alert";
import Login from "./Login";
import WithCryptoLogin from "./WithCryptoLogin";

const Auth = () => {
  const { authenticate, authError, login, isAuthenticating, isAuthenticated } =
    useMoralis();
  let navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <Container>
      <Stack gap={6}>
        <Heading padding={6} paddingBottom={0} textAlign={"center"}>
          Welcome to Crypto Media
        </Heading>
        {authError && <AlertComponent error={authError} />}
        <Login login={login} />
        <Text textAlign={"center"} marginTop={0}>
          -or-
        </Text>
        <WithCryptoLogin
          loginWithCrypto={authenticate}
          isAuthenticating={isAuthenticating}
        />
        <Link to={"/signup"}>Newbie? create an account here!</Link>
      </Stack>
    </Container>
  );
};

export default Auth;
