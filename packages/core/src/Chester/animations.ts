import { keyframes } from "@pigpile/core";

export const jumpAnimation = keyframes`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;

export const wiggleAnimation = keyframes`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-4.5deg) skewY(-3.5deg);
  }

  33.3% {
    transform: skewX(3.25deg) skewY(2.25deg);
  }

  44.4% {
    transform: skewX(-2.125deg) skewY(-1.125deg);
  }

  55.5% {
    transform: skewX(1.0625deg) skewY(.625deg);
  }

  66.6% {
    transform: skewX(-0.48125deg) skewY(-0.28125deg);
  }

  77.7% {
    transform: skewX(0.190625deg) skewY(0.100625deg);
  }

  88.8% {
    transform: skewX(-0.0953125deg) skewY(-0.0553125deg);
  }
`;

export const tailAnimation = keyframes`
  from {
    transform: scale3d(.8, .8, .8);
  }

  10%,
  20% {
    transform: scale3d(.8, .8, .8) rotate3d(0, 0, 1, -4deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(.8, .8, .8) rotate3d(0, 0, 1, 4deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(.8, .8, .8) rotate3d(0, 0, 1, -4deg);
  }

  to {
    transform: scale3d(.8, .8, .8);
  }
`;

export const wahooAnimation = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.99, 0.99, 0.99) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.02, 1.02, 1.02) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.02, 1.02, 1.02) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const shadowAnimation = keyframes`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, 0px, 0) scaleX(.7);
    opacity: .5;
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, 0px, 0) scaleX(.85);
    opacity: .7;
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleX(1.01);
    opacity: 1;
  }

  90% {
    transform: translate3d(0, 0px, 0) scaleX(.98);
    opacity: .86;
  }
`;
