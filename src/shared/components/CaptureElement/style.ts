import styled from "styled-components";

export const BoxSVG = styled.svg`
  display: block;
  text-indent: -9999px;
  width: 24px;
  height: 24px;
  background-size: 40px 40px;
  cursor: pointer;
  background: url(google-capture.svg) no-repeat top left;
  -webkit-mask-image: url(google-capture.svg) no-repeat top left;
  mask-image: url(google-capture.svg);
  filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
`