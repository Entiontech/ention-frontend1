import "styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Header from "components/layout/header";
import Footer from "components/layout/footer";

// Patch to suppress deprecated DOMNodeInserted warning from react-simple-chatbot
if (typeof window !== 'undefined' && window.MutationObserver) {
  const origObserve = window.MutationObserver.prototype.observe;
  window.MutationObserver.prototype.observe = function(target, options) {
    if (options && options.subtree && options.childList && options.attributes) {
      // Remove deprecated event listeners if present
      if (target && target.removeEventListener) {
        try {
          target.removeEventListener('DOMNodeInserted', () => {});
        } catch (e) {}
      }
    }
    return origObserve.apply(this, arguments);
  };
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const steps = [
    {
      id: "0",
      message: "Hey!",

      // This calls the next id
      // i.e. id 1 in this case
      trigger: "1",
    },
    {
      id: "1",

      // This message appears in
      // the bot chat bubble
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",

      // Here we want the user
      // to enter input
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: " hi {previousValue}, how can I help you?",
      trigger: 4,
    },
    {
      id: "4",
      options: [
        // When we need to show a number of
        // options to choose we create alist
        // like this
        { value: 1, label: "View Products", trigger: 5 },
        { value: 2, label: "Know about our services", trigger: 6 },
      ],
    },
    {
      id: "5",
      message:
        "Please check out our products. Go to https://ention.in/products/laptops",
      trigger: 7,
    },

    {
      id: "6",
      message:
        "Check out our services. Go to https://ention.in/service/start-a-business",
      trigger: 7,
    },
    {
      id: "7",
      message: "Thank You!!",
      end: true,
    },
  ];

  // Creating our own theme
  const theme = {
    background: "#ffffff",
    headerBgColor: "#007e9e",
    headerFontSize: "20px",
    botBubbleColor: "#007e9e",
    headerFontColor: "white",
    botFontColor: "white",
    userBubbleColor: "#007e9e",
    userFontColor: "white",
  };

  // Set some properties of the bot
  const config = {
    botAvatar: "/bot.png",
    floating: true,
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
      </Head>
      <div className="App">
        <ToastContainer />
        <SessionProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <ThemeProvider theme={theme}>
            <ChatBot
              // This appears as the header
              // text for the chat bot
              headerTitle="Ention"
              steps={steps}
              {...config}
            />
          </ThemeProvider>
        </SessionProvider>
      </div>
    </>
  );
}
