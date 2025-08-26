import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and title */}
        <title>ENTION - Made in India Laptops</title>
        <meta name="description" content="ENTION - Premium Made in India Laptops. E3, E4, E5 Series with latest technology and affordable pricing." />
        <link rel="shortcut icon" href="/bot.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        
        {/* Open Graph Meta Tags - Prevent old images from appearing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ENTION - Made in India Laptops" />
        <meta property="og:description" content="ENTION - Premium Made in India Laptops. E3, E4, E5 Series with latest technology and affordable pricing." />
        <meta property="og:url" content="https://ention.in" />
        <meta property="og:site_name" content="ENTION" />
        <meta property="og:image" content="https://ention.in/assets/ention-logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="ENTION - Made in India Laptops Logo" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ENTION - Made in India Laptops" />
        <meta name="twitter:description" content="ENTION - Premium Made in India Laptops. E3, E4, E5 Series with latest technology and affordable pricing." />
        <meta name="twitter:image" content="https://ention.in/assets/ention-logo.png" />
        <meta name="twitter:image:alt" content="ENTION - Made in India Laptops Logo" />
        
        {/* Additional Meta Tags for Better SEO and Cache Control */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Cache Control Headers via Meta Tags */}
        <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/_next/static/chunks/main.js" as="script" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//ention-backend.onrender.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://ention-backend.onrender.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Resource hints for faster loading */}
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        
        {/* Performance optimizations */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Critical CSS for faster rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical rendering path CSS */
            html { scroll-behavior: smooth; }
            body { 
              margin: 0; 
              padding: 0; 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
            }
            * { box-sizing: border-box; }
            img { max-width: 100%; height: auto; display: block; }
            a { text-decoration: none; color: inherit; }
            button { border: none; background: none; cursor: pointer; }
            input, textarea { font-family: inherit; }
            
            /* Optimize paint and layout */
            .optimize-paint { 
              will-change: transform; 
              transform: translateZ(0); 
            }
            
            /* Loading states */
            .loading { opacity: 0; transition: opacity 0.2s ease-in-out; }
            .loaded { opacity: 1; }
            
            /* Reduce layout shift */
            .aspect-ratio { position: relative; width: 100%; }
            .aspect-ratio::before { content: ''; display: block; padding-top: 56.25%; }
            .aspect-ratio > * { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Performance monitoring script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            if ('performance' in window) {
              window.addEventListener('load', () => {
                setTimeout(() => {
                  const perfData = performance.getEntriesByType('navigation')[0];
                  console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
                  console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
                }, 0);
              });
            }
            
            // Optimize images
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
              }, { rootMargin: '50px' });
              
              document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('img[data-src]').forEach(img => {
                  imageObserver.observe(img);
                });
              });
            }
          `
        }} />
      </body>
    </Html>
  );
}
