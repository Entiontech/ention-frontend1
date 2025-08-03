import Head from 'next/head';
import '../styles/globals.css';
import { useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
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

// Performance monitoring
const reportWebVitals = (metric) => {
  if (metric.label === 'web-vital') {
    console.log(metric);
    // Send to analytics if needed
  }
};

export default function App({
  Component,
  pageProps,
}) {
  const steps = [
    {
      id: "0",
      message: "Hey!",
      trigger: "1",
    },
    {
      id: "1",
      message: "Please write your username",
      trigger: "2",
    },
    {
      id: "2",
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

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = '/_next/static/css/app.css';
      document.head.appendChild(link);

      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.as = 'font';
      fontLink.crossOrigin = 'anonymous';
      fontLink.href = '/fonts/inter-var.woff2';
      document.head.appendChild(fontLink);
    };

    preloadCriticalResources();

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0FAFCA" />
        <link rel="shortcut icon" href="/bot.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//ention-backend.onrender.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://ention-backend.onrender.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inline */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for above-the-fold content */
            body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            .loading { opacity: 0; transition: opacity 0.3s; }
            .loaded { opacity: 1; }
            /* Optimize paint and layout */
            * { box-sizing: border-box; }
            img { max-width: 100%; height: auto; }
          `
        }} />
        
        {/* Performance hints */}
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        <link rel="preload" href="/_next/static/chunks/webpack.js" as="script" />
      </Head>
      
      <div className="App">
        <ToastContainer />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <ThemeProvider theme={theme}>
          <ChatBot
            headerTitle="Ention"
            steps={steps}
            {...config}
          />
        </ThemeProvider>
      </div>
    </>
  );
}
