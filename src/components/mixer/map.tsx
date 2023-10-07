import { Box } from "@chakra-ui/react";
import Map from "react-map-gl";

const MixerMap = () => {
  return (
    <Box width={"100%"} height={100}>
      <Map
        initialViewState={{
          longitude: 114.7655,
          latitude: 32.7502,
          zoom: 0,
        }}
        style={{ width: "parent", height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={
          "pk.eyJ1IjoidGhlaW1wYWN0d2F2ZSIsImEiOiJjbG5kM3ZudmswMWtnMmpvNXB6Yno0bHY0In0.7BdelspUsopSLqfK0hk7jA"
        }
      />
    </Box>
  );
};

export default MixerMap;
