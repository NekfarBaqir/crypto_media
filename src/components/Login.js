import { Button, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Login = ({ login }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack gap={3}>
      <Heading textAlign={"center"}>Login</Heading>
      <Input
        type={"text"}
        value={userName}
        placeholder={"your username:"}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        type={"password"}
        value={password}
        placeholder={"your password:"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={() => login(userName, password)}>Login</Button>
    </Stack>
  );
};

export default Login;
