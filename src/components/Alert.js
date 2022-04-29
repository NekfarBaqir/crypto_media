import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

const AlertComponent = ({ error }) => {
  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="fit-content"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Login Error
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        {error?.message ?? "UnKnown Problem!"}
      </AlertDescription>
    </Alert>
  );
};

export default AlertComponent;
