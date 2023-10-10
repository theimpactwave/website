import "mapbox-gl/dist/mapbox-gl.css";

import { Box, Text } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import type { MarkerDragEvent } from "react-map-gl";
import Map, { Marker, NavigationControl } from "react-map-gl";

import { useEnv } from "@/lib/providers/env";

export const DraggableMap = () => {
  const env = useEnv();
  const [marker, setMarker] = useState({
    longitude: 114.7655,
    latitude: 32.7502,
  });

  const onMarkerDragStartHandler = useCallback((event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragHandler = useCallback((event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const onMarkerDragEndHandler = useCallback((event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
    });
  }, []);

  const Pin = () => {
    return (
      <>
        <svg
          height={33}
          viewBox="0 0 24 24"
          style={{
            fill: "#5DBD77",
            stroke: "#E8E8E9",
          }}
        >
          <path
            d={`M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`}
          />
        </svg>
      </>
    );
  };

  return (
    <Box position={"relative"} width={"100%"} height={420}>
      <Map
        initialViewState={{
          longitude: 114.7655,
          latitude: 32.7502,
          zoom: 0,
        }}
        style={{ width: "inherit", height: "100%" }}
        mapStyle={"mapbox://styles/mapbox/satellite-streets-v11"}
        mapboxAccessToken={env?.MAPBOX_API_KEY}
      >
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          draggable
          onDragStart={onMarkerDragStartHandler}
          onDrag={onMarkerDragHandler}
          onDragEnd={onMarkerDragEndHandler}
        >
          <Pin />
        </Marker>
        <NavigationControl />
      </Map>
      <Text fontSize={"xs"} mb={8}>
        Lat: {marker.latitude}, Lon: {marker.longitude}
      </Text>
    </Box>
  );
};

DraggableMap.displayName = "DraggableMap";
