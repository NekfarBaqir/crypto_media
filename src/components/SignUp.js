import { Button, Container, Heading, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AlertComponent from "./Alert";

const SignUp = ({ loading, signup, authError, isAuthenticated }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/");
  }
  return (
    <Container>
      <Heading padding={6} textAlign={"center"}>
        Welcome to Crypto Media
      </Heading>
      {authError && <AlertComponent error={authError} />}
      <Stack gap={3}>
        <Heading textAlign={"center"}>SignUp</Heading>
        <Input
          type={"text"}
          value={userName}
          placeholder={"your username:"}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          type={"email"}
          value={email}
          placeholder={"your email:"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={"password"}
          value={password}
          placeholder={"your password:"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={() => signup(userName, password)}>SignUp</Button>
        <Link to={"/login"}>Already have account? Login here!</Link>
      </Stack>
    </Container>
  );
};

export default SignUp;
