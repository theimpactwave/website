import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import GradeIcon from "@mui/icons-material/Grade";
import PersonIcon from "@mui/icons-material/Person";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SettingsIcon from "@mui/icons-material/Settings";
import Image from "next/image";

import Hairline from "@/components/hairline";
import Logo from "@/components/logo";
import MixerUi from "@/components/mixer/ui";

const Mixer = () => {
  return (
    <>
      <Box id={"demo"} bg={"black"} color={"white"} height={"100vh"} p={4}>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          height={"100%"}
        >
          <Stack direction={"column"} minW={200} height={"100%"}>
            <Box mb={4}>
              <Logo width={80} reverse />
            </Box>
            <Box textAlign={"center"} mb={4}>
              <Text fontSize={"lg"} fontWeight={700} mb={4}>
                Hello Frank
              </Text>
              <Avatar name={"Frank Mueller"} mb={4} />
              <Box fontSize={"sm"} color={"secondary"}>
                <Text as={"span"}>Your Balance:</Text>
                <Text as={"span"} fontWeight={900}>
                  {" "}
                  $100
                </Text>
              </Box>
            </Box>
            <Box>
              <Hairline reverse />
            </Box>
            <Box>
              <List spacing={2}>
                <ListItem>
                  <Button leftIcon={<RocketLaunchIcon />} width={"100%"}>
                    Your Impact
                  </Button>
                </ListItem>
                <ListItem>
                  <Button leftIcon={<GradeIcon />} width={"100%"}>
                    Impact Stories
                  </Button>
                </ListItem>
                <ListItem>
                  <Button leftIcon={<PersonIcon />} width={"100%"}>
                    Your Account
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Stack direction={"column"} width={"100%"} pl={8}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              width={"100%"}
              alignItems={"flex-end"}
              justifyContent={"flex-end"}
            >
              <Box mb={8}>
                <Button
                  variant={"solid"}
                  colorScheme={"secondaryScheme"}
                  color={"white"}
                  size={"sm"}
                  leftIcon={
                    <Image
                      src={"images/metamask-icon.svg"}
                      width={20}
                      height={20}
                      alt={""}
                    />
                  }
                >
                  Connect your Wallet
                </Button>
              </Box>
              <Box>
                <Stack direction={"row"} alignItems={"center"} spacing={0}>
                  <IconButton
                    aria-label={"settings"}
                    icon={<AccountCircleIcon />}
                    colorScheme={"white"}
                    color={"white"}
                    size={"sm"}
                  />
                  <IconButton
                    aria-label={"settings"}
                    icon={<CircleNotificationsIcon />}
                    colorScheme={"white"}
                    color={"white"}
                    size={"sm"}
                  />
                  <IconButton
                    aria-label={"settings"}
                    icon={<SettingsIcon />}
                    colorScheme={"white"}
                    color={"white"}
                    size={"sm"}
                  />
                </Stack>
              </Box>
            </Box>
            <Box>
              <Box>
                <Text fontSize={"lg"} fontWeight={700} mb={8}>
                  Your impact mix:
                </Text>
                <MixerUi />
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Mixer;
