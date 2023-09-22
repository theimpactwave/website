import {Box} from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
  return (<>
    <Box sx={{
      position: "relative",
      height: 300
    }}>
      <Image src={"/images/teaser-1920-strip.jpg"} alt={""} layout={"fill"} objectFit={"cover"} objectPosition={"center"} />
    </Box>
  </>)
}

export default Hero
