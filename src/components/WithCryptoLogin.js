import { Button } from "@chakra-ui/react";
import React from "react";

const WithCryptoLogin = ({ loginWithCrypto, isAuthenticating }) => {
  return (
    <Button isLoading={isAuthenticating} onClick={() => loginWithCrypto()}>
      Login with crypto
    </Button>
  );
};

export default WithCryptoLogin;
