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
if (typeof window !== 'undefined') {
  // Suppress console warnings for deprecated events
  const originalWarn = console.warn;
  console.warn = function(...args) {
    if (args[0] && typeof args[0] === 'string' && args[0].includes('DOMNodeInserted')) {
      return; // Suppress DOMNodeInserted warnings
    }
    originalWarn.apply(console, args);
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
    // Aggressive preloading of critical resources
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

      // Preload critical images
      const criticalImages = [
        '/assets/landing_page/2A.webp',
        '/assets/landing_page/3A.webp',
        '/assets/landing_page/4A.webp',
        '/assets/Ention-Laptop-E3-Catalogue-design-2.png'
      ];

      criticalImages.forEach(src => {
        const imgLink = document.createElement('link');
        imgLink.rel = 'preload';
        imgLink.as = 'image';
        imgLink.href = src;
        document.head.appendChild(imgLink);
      });

      // Preload critical videos
      const videoLink = document.createElement('link');
      videoLink.rel = 'preload';
      videoLink.as = 'video';
      videoLink.href = '/assets/landing_page/0709 (1)(1) (1).mp4';
      document.head.appendChild(videoLink);
    };

    preloadCriticalResources();

    // Enhanced Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px', // Start loading 50px before entering viewport
        threshold: 0.1
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle scroll optimizations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizeScroll);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0FAFCA" />
        <link rel="shortcut icon" href="/bot.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        
        {/* Aggressive DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="//ention-backend.onrender.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//picsum.photos" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://ention-backend.onrender.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS inline for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for ultra-fast loading */
            * { box-sizing: border-box; }
            body { 
              margin: 0; 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            .loading { opacity: 0; transition: opacity 0.2s; }
            .loaded { opacity: 1; }
            img { max-width: 100%; height: auto; }
            video { max-width: 100%; height: auto; }
            
            /* Optimize paint and layout */
            .front-page-slider { 
              contain: layout style paint;
              will-change: transform;
            }
            .background-image-center {
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
            }
            
            /* Smooth transitions */
            .transition-opacity { transition: opacity 0.3s ease-out; }
            .transition-transform { transition: transform 0.3s ease-out; }
            
            /* Loading animations */
            .animate-pulse {
              animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
            
            /* Optimize for mobile */
            @media (max-width: 768px) {
              .mobile-slide { 
                contain: layout style paint;
                will-change: auto;
              }
            }
          `
        }} />
        
        {/* Performance hints */}
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        <link rel="modulepreload" href="/_next/static/chunks/webpack.js" />
        
        {/* Resource hints for faster loading */}
        <link rel="prefetch" href="/product" />
        <link rel="prefetch" href="/ecommerce/product" />
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
