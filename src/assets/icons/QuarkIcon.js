// src/assets/icons/QuarkIcon.js
import React from 'react';
import Svg, { 
  Rect, 
  Circle, 
  Path, 
  Line 
} from 'react-native-svg';

const QuarkIcon = ({ 
  width = 60, 
  height = 60, 
  style = {} 
}) => {
  return (
    <Svg 
      width={width} 
      height={height} 
      viewBox="120 90 60 60" 
      style={style}
    >
      <Rect width="100%" height="100%" fill="white"/>

      {/* Quarks (bolas pequeñas y más juntas) */}
      <Circle cx="150" cy="140" r="6" fill="#00BFFF" />
      <Circle cx="140" cy="160" r="6" fill="#32CD32" />
      <Circle cx="160" cy="160" r="6" fill="#FF4500" />

      {/* Conexiones tipo gluón */}
      <Path 
        d="M150 140 Q145 150 140 160" 
        stroke="#999" 
        strokeWidth="1.3" 
        fill="none"
      />
      <Path 
        d="M150 140 Q155 150 160 160" 
        stroke="#999" 
        strokeWidth="1.3" 
        fill="none"
      />
      <Path 
        d="M140 160 Q150 170 160 160" 
        stroke="#999" 
        strokeWidth="1.3" 
        fill="none"
      />

      {/* Rayos exteriores (largos) */}
      {/* Parte superior */}
      <Line x1="150" y1="134" x2="150" y2="98" stroke="#00BFFF" strokeWidth="1"/>
      <Line x1="146" y1="137" x2="132" y2="112" stroke="#00BFFF" strokeWidth="1"/>
      <Line x1="154" y1="137" x2="168" y2="112" stroke="#00BFFF" strokeWidth="1"/>

      {/* Parte inferior izquierda */}
      <Line x1="134" y1="162" x2="114" y2="172" stroke="#32CD32" strokeWidth="1"/>
      <Line x1="137" y1="165" x2="124" y2="184" stroke="#32CD32" strokeWidth="1"/>

      {/* Parte inferior derecha */}
      <Line x1="166" y1="162" x2="186" y2="172" stroke="#FF4500" strokeWidth="1"/>
      <Line x1="163" y1="165" x2="176" y2="184" stroke="#FF4500" strokeWidth="1"/>
    </Svg>
  );
};

export default QuarkIcon;