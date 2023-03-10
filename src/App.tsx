

import { ChakraProvider, useDisclosure, Button, Stack } from "@chakra-ui/react";
import theme from "./theme";
import Layout from "./components/Layout";
import ConnectButton from "./components/ConnectButton";
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

import { getBalance, transfer } from "./api/form"
import { useMetamask } from "./components/Metamask";


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { connect, accounts } = useMetamask();

  const handleGetBalance = async() => {
    await connect();
    getBalance(accounts[0])
  }

  const handleTransfer = async() => {
    await connect();
    transfer(accounts[0])
  }

  return (
    <ChakraProvider theme={theme}>

      <Layout>
        <Stack spacing={4} direction='column' align='center'>

          <ConnectButton handleOpenModal={onOpen} />
          <AccountModal isOpen={isOpen} onClose={onClose} />
         {/* Buttons */}
         <Button
          bg="blue.800"
          color="blue.300"
          fontSize="lg"
          fontWeight="medium"
          borderRadius="xl"
          border="1px solid transparent"
          _hover={{
            borderColor: "blue.700",
            color: "blue.400",
          }}
          _active={{
            backgroundColor: "blue.800",
            borderColor: "blue.700",
          }}
          onClick={() => {
            handleGetBalance()
          }  
          }>
            getBalance
          </Button>

          <Button
          bg="blue.800"
          color="blue.300"
          fontSize="lg"
          fontWeight="medium"
          borderRadius="xl"
          border="1px solid transparent"
          _hover={{
            borderColor: "blue.700",
            color: "blue.400",
          }}
          _active={{
            backgroundColor: "blue.800",
            borderColor: "blue.700",
          }}
          onClick={() => {
              handleTransfer()
          }
          }>
            transfer
          </Button>


        </Stack>

      </Layout>

    </ChakraProvider>
  );
}

export default App;
