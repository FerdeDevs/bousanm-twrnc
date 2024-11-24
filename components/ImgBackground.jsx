import { View, Text, Image } from "react-native";
import React from "react";

const ImgBackground = () => {
  return (
    <Image
      blurRadius={10}
      source={require("../assets/images/fonds.jpg")}
      style={{
        position: 'absolute', // absolute
        width: '100%', // w-full
        height: '100%', // h-full
      }}
    />
  );
};

export default ImgBackground;
