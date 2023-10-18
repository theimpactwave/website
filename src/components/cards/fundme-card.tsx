import type { CardProps } from "@chakra-ui/react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Image from "next/image";
import { useCallback, useMemo } from "react";

type idAddressMappingType = { id: number; address: string };

export interface FundmeCardProps extends Omit<CardProps, "id" | "content"> {
  id: number;
  avatarImage: string;
  initiativeImage: string;
  name: string;
  organisation: string;
  excerpt: string;
}

const FundmeCard = (props: FundmeCardProps) => {
  const {
    id,
    name,
    organisation,
    avatarImage,
    initiativeImage,
    excerpt,
    ...rest
  } = props;
  const toast = useToast();

  const getIdAddressMapping: idAddressMappingType[] = useMemo(() => {
    return [{ id: 1, address: "test" }];
  }, []);

  const getAddressById = useCallback(
    (id: number): string | undefined => {
      const mapped = getIdAddressMapping.find(
        (mapping: idAddressMappingType) => mapping.id === id,
      );
      if (mapped) {
        return mapped.address;
      }
      return undefined;
    },
    [getIdAddressMapping],
  );

  const onFundmeButtonHandler = useCallback(
    async (id: number) => {
      if (window.ethereum && window.ethereum?.isMetaMask) {
        const accounts = await window.ethereum?.request({
          method: "eth_requestAccounts",
        });
        // @ts-ignore
        if (accounts && accounts?.[0]) {
          // @ts-ignore
          const account = accounts?.[0];
          window.ethereum
            ?.request({
              method: "eth_sendTransaction",
              params: [
                {
                  from: account,
                  to: getAddressById(id),
                },
              ],
            })
            .then((txHash) => {
              toast({
                title: "Transaction successful!",
                description: `Thank you very much for participating in our BETA Transaction test. Your transaction hash is: ${txHash}`,
                status: "success",
                duration: 60000,
                isClosable: true,
                position: "top",
              });
            })
            .catch((e: Error) => {
              toast({
                title: "Transaction failed!",
                description: `Transaction to recipient address failed with: ${e.message}`,
                status: "error",
                duration: 60000,
                isClosable: true,
                position: "top",
              });
            });
        } else {
          toast({
            title: "Account error!",
            description:
              "You need to connect your MetaMask wallet first and connect the Celo chain",
            status: "warning",
            duration: 60000,
            isClosable: true,
            position: "top",
          });
        }
      } else {
        toast({
          title: "Connection error!",
          description: "You need to connect your MetaMask wallet first",
          status: "warning",
          duration: 60000,
          isClosable: true,
          position: "top",
        });
      }
    },
    [toast, getAddressById],
  );

  return (
    <>
      <Card variant={"outline"} {...rest}>
        <CardBody>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            mb={4}
            sx={{
              "& img": {
                borderRadius: "50%",
              },
            }}
          >
            <Image src={avatarImage} alt={name} width={100} height={100} />
          </Box>
          <Heading
            as={"h2"}
            textAlign={"center"}
            fontSize={[24, 26, 28]}
            mb={1}
            fontWeight={500}
          >
            {name}
          </Heading>
          <Text
            textAlign={"center"}
            color={"brand"}
            fontSize={14}
            fontWeight={700}
            mb={4}
          >
            {organisation}
          </Text>
          <Box
            display={"flex"}
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            mb={8}
            sx={{
              "& img": {
                position: "relative !important",
                height: "33px !important",
                width: "auto !important",
                px: 2,
              },
            }}
          >
            <Image
              src={initiativeImage}
              alt={name}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
            />
          </Box>
          <Text mb={4}>{excerpt}</Text>
          <Button
            leftIcon={<AttachMoneyIcon />}
            variant={"solid"}
            colorScheme={"secondaryScheme"}
            onClick={() => {
              onFundmeButtonHandler(id).then(() => {});
            }}
          >
            Fund me (BETA)
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default FundmeCard;
