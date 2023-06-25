import { ReactNode } from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface StyleProviderProps {
  children: ReactNode;
}

const colors = {
  //brand
  primary: "#134074",
  secondary: "#8DA9C4",
  utils: {
    //utils
    red: "#ED6A5E",
    green: "#4CE0B3",
    yellow: "#e0e04c",

    //greyscale
    white: "#ffffff",
    almostWhite: "#F7F8FA",
    gray: "#cccccc",
    almostblack: "#222222",
    black: "#000000",
  },
};

const theme = extendTheme({ colors });

const StyleProvider: React.FC<StyleProviderProps> = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default StyleProvider;
