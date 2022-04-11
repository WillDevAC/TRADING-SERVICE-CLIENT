import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-nextjs-toast";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from "dayjs";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default MyApp;
