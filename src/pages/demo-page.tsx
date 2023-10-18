"use client";

import { Button } from "@chakra-ui/react";
import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";

import Container from "@/components/container";

const DemoPage = () => {
  const { sdk } = useSDK();
  const [account, setAccount] = useState<string>("");

  const getAccount = async () => {
    if (account) {
      return account;
    } else {
      const accounts = await window.ethereum?.request({
        method: "eth_requestAccounts",
      });
      // @ts-ignore
      return accounts?.[0];
    }
  };

  const onConnectButtonHandler = async () => {
    if (window.ethereum && window.ethereum?.isMetaMask) {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });
      if (chainId !== "0xaef3") {
        const params = {
          chainId: "0xaef3",
          chainName: "Alfajores Testnet",
          nativeCurrency: {
            name: "Alfajores Celo",
            symbol: "A-CELO",
            decimals: 18,
          },
          rpcUrls: ["https://alfajores-forno.celo-testnet.org"],
          blockExplorerUrls: ["https://alfajores-blockscout.celo-testnet.org/"],
          iconUrls: ["future"],
        };
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [params],
        });
      }
    } else {
      try {
        const accounts = await sdk?.connect();
        // @ts-ignore
        setAccount(accounts?.[0]);
      } catch (err) {
        console.warn(`failed to connect..`, err);
      }
    }
  };

  const onTransactionButtonHandler = async () => {
    const account = await getAccount();
    if (account) {
      window.ethereum
        ?.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: account,
              to: "",
            },
          ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error(error));
    }
  };

  return (
    <Container>
      <Button onClick={onConnectButtonHandler}>Connect to wallet</Button>
      <Button onClick={onTransactionButtonHandler}>Send TX</Button>
    </Container>
  );
};

export default DemoPage;
