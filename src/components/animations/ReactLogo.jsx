import React from "react";
import styled, { keyframes } from "styled-components";
import ReactLogoSvg from "../../resources/React-icon.svg";

const rotateReactLogo360Deg = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ReactLogo = styled(ReactLogoSvg)`
  animation: ${rotateReactLogo360Deg} 5s linear infinite;
`;

export default ReactLogo;
