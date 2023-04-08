import React from "react";
import { Svg, LinearGradient, Stop, Rect } from "react-native-svg";

const GradientBackground = ({ startColor, endColor }) => {
  return (
    <Svg height="100%" width="100%" style={{ position: "absolute", bottom: 0 }}>
      <LinearGradient id="grad"  x1="0" y1="0" x2="0" y2="0.3">
        <Stop offset="0" stopColor={startColor} stopOpacity="1" />
        <Stop offset="1" stopColor={endColor} stopOpacity="1" />
      </LinearGradient>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)"/>
    </Svg>
  );
};

export default GradientBackground;
