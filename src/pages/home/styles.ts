import { styled, Heading, Text } from "@ignite-ui/react";

import HeroDetail from "../../assets/hero-detail.png";

export const Container = styled("div", {
  maxWidth: "1160px",
  margin: "0 auto",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  gap: "$20",
  overflow: "hidden",
});

export const Hero = styled("div", {
  maxWidth: 480,
  padding: "0 $10",

  [`> ${Heading}`]: {
    "@media(max-width: 600px)": {
      fontSize: "$6xl",
    },
  },

  [`> ${Text}`]: {
    marginTop: "$2",
    color: "$gray200",
    fontSize: "$xl",
  },
});

export const Preview = styled("div", {
  "@media(max-width: 600px)": {
    display: "none",
  },
});
