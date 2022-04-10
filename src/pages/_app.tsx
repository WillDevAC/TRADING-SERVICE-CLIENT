import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-nextjs-toast";
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
import { useRouter } from "next/router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dayjs from "dayjs";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { pathname, asPath, push } = useRouter();
  useEffect(() => {
    if (pathname.search("/login") < 0 && typeof window != undefined) {
      const value = localStorage.getItem("@token");
      const date = localStorage.getItem("@timestampToken");
      const isValid =
        value &&
        dayjs(date).toDate().getDate() === dayjs(new Date()).toDate().getDate();
      if (!isValid) {
        push(`/login?url=${asPath}`);
      }
    }
  }, [typeof window, pathname]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default MyApp;
