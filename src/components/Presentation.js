import React from "react";

import { FlexBox, FullScreen, Progress, Deck, Box } from "spectacle";

import Slides from "./Slides";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Zen Maru Gothic", Helvetica, Arial, sans-serif',
    text: '"Zen Kurenaido", Helvetica, Arial, sans-serif'
  },
  colors: {
    primary: "hsla(0, 100%, 0%, .8)",
    secondary: "hsla(0, 100%, 0%, .85)",
    tertiary: "hsla(140, 100%, 90%, 1)"
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1rem">
      <FullScreen color="black" />
    </Box>
    <Box padding="1rem">
      <Progress color="black" />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const Presentation = () => (
  <Deck theme={theme} template={template}>
    {Slides.map((S, i) => {
      return <S key={`slide-${i}`} />;
    })}
  </Deck>
);

export default Presentation;
