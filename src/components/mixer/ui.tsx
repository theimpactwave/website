import {
  Box,
  FormControl,
  FormLabel,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

import MixerMap from "@/components/mixer/map";

const MixerUi = () => {
  return (
    <>
      <Box>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          spacing={1}
        >
          <Box flex={[1, 1, "0 0 50%"]}>
            <FormControl mb={10}>
              <FormLabel color={"primary"} fontWeight={700}>
                Initiatives size
              </FormLabel>
              <Slider aria-label={"slider1"} defaultValue={10} maxW={250}>
                <SliderMark
                  value={1}
                  sx={{
                    mt: 4,
                    color: "gray",
                    fontSize: "sm",
                  }}
                >
                  Seed level
                </SliderMark>
                <SliderMark
                  value={50}
                  sx={{
                    mt: 4,
                    color: "gray",
                    fontSize: "sm",
                  }}
                >
                  small
                </SliderMark>
                <SliderMark
                  value={100}
                  sx={{
                    mt: 4,
                    color: "gray",
                    fontSize: "sm",
                  }}
                >
                  medium
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
            <FormControl mb={20}>
              <FormLabel color={"primary"} fontWeight={700}>
                Initiatives proximity
              </FormLabel>
              <Slider aria-label={"slider1"} defaultValue={10} maxW={250}>
                <SliderMark
                  value={1}
                  sx={{
                    mt: 4,
                    color: "gray",
                    fontSize: "sm",
                  }}
                >
                  Local
                </SliderMark>
                <SliderMark
                  value={100}
                  sx={{
                    mt: 4,
                    color: "gray",
                    fontSize: "sm",
                  }}
                >
                  World
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </FormControl>
          </Box>
          <Box flex={[1, 1, "0 0 50%"]}>
            <FormControl mb={20}>
              <FormLabel color={"primary"} fontWeight={700}>
                Domain preferences
              </FormLabel>
              <Stack direction={"row"} spacing={10} mb={4}>
                <Slider aria-label={"slider1"} defaultValue={10} maxW={250}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text>Culture</Text>
              </Stack>
              <Stack direction={"row"} spacing={10} mb={4}>
                <Slider aria-label={"slider1"} defaultValue={10} maxW={250}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text>Social</Text>
              </Stack>
              <Stack direction={"row"} spacing={10} mb={4}>
                <Slider aria-label={"slider1"} defaultValue={10} maxW={250}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text>Environmental</Text>
              </Stack>
            </FormControl>
          </Box>
        </Stack>
        <Box>
          <MixerMap />
        </Box>
      </Box>
    </>
  );
};

export default MixerUi;
