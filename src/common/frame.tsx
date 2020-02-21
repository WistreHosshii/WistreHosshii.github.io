import styled, { keyframes, Keyframes } from "styled-components";
import React, { ReactNode } from "react";

const MenuFrame = (props: Props) => {
  return <Frame props={props}>{props.children}</Frame>;
};
const defaultFadeInFrame = keyframes`
  0% {
      width: 0;
      height: 0;
      right: 60px;
      opacity: 0;
    }
    30% {
      width: 100%;
      height: 0;
      right: 10px;
      opacity: 1;
    }
    100% {
      width: 100%;
      height: 100%;
      right: 10px;
    }
  }
`;

const defaultFadeOutFrame = keyframes`
  0% {
      width: 100%;
      height: 100%;
      right: 10px;
      opacity: 1;
    }
  70% {
    width: 100%;
    height: 0;
    right: 10px;
    opacity: 1;
  }
  100% {
    width: 0;
    height: 0;
    right: 60px;
    opacity: 0;
  }
`;
const Frame = styled.div<{ props: Props }>`
  position: absolute;
  overflow: scroll;
  border-radius: 10px;
  border: solid 1px #1f4017;
  width: 100%;
  height: 100%;
  background-color: #090b0a;
  animation: ${({ props }) =>
      props.isFirst || props.isMenuOpen
        ? props.fadeInFrame
        : props.fadeOutFrame}
    ${({ props }) => props.time}s ease forwards
    ${({ props }) => (props.isFirst ? "paused" : "running")};
`;
interface Props {
  isMenuOpen: boolean;
  isFirst: boolean;
  time: number;
  fadeInFrame: Keyframes;
  fadeOutFrame: Keyframes;
  children: ReactNode | null;
}

MenuFrame.defaultProps = {
  isMenuOpen: false,
  isFirst: false,
  time: 1,
  fadeInFrame: defaultFadeInFrame,
  fadeOutFrame: defaultFadeOutFrame
} as Props;
export default MenuFrame;