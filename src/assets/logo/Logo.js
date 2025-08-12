// src/assets/icons/QuarkIcon.js
import React from 'react';
import Svg, {
  Circle,
  Path,
  Line
} from 'react-native-svg';

const Logo = ({
  width = 300,
  height = 300,
  style = {}
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 300 300"
      style={style}
    >
      {/* Círculos principales más grandes */}
      <Circle cx="150" cy="120" r="12" fill="#00BFFF" />
      <Circle cx="120" cy="180" r="12" fill="#32CD32" />
      <Circle cx="180" cy="180" r="12" fill="#FF4500" />

      {/* Conexiones entre círculos */}
      <Path 
        d="M150 120 Q135 150 120 180" 
        stroke="#999" 
        strokeWidth="2.5" 
        fill="none"
      />
      <Path 
        d="M150 120 Q165 150 180 180" 
        stroke="#999" 
        strokeWidth="2.5" 
        fill="none"
      />
      <Path 
        d="M120 180 Q150 200 180 180" 
        stroke="#999" 
        strokeWidth="2.5" 
        fill="none"
      />

      {/* Líneas superiores del círculo azul */}
      <Line x1="150" y1="108" x2="150" y2="40" stroke="#00BFFF" strokeWidth="2"/>
      <Line x1="142" y1="114" x2="110" y2="60" stroke="#00BFFF" strokeWidth="2"/>
      <Line x1="158" y1="114" x2="190" y2="60" stroke="#00BFFF" strokeWidth="2"/>

      {/* Líneas del círculo verde */}
      <Line x1="108" y1="184" x2="40" y2="210" stroke="#32CD32" strokeWidth="2"/>
      <Line x1="114" y1="190" x2="60" y2="240" stroke="#32CD32" strokeWidth="2"/>

      {/* Líneas del círculo naranja */}
      <Line x1="192" y1="184" x2="260" y2="210" stroke="#FF4500" strokeWidth="2"/>
      <Line x1="186" y1="190" x2="240" y2="240" stroke="#FF4500" strokeWidth="2"/>
    </Svg>
  );
};

export default Logo;