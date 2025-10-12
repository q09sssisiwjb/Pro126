import { useEffect, useRef, useState } from "react";

export const AdsterraBanner = () => {
  const mobileAdRef = useRef<HTMLDivElement>(null);
  const desktopAdRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && mobileAdRef.current && !isLoaded) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.async = true;
      script1.innerHTML = `
        atOptions = {
          'key' : 'cb0fcd15f1cc600221094578455852a9',
          'format' : 'iframe',
          'height' : 50,
          'width' : 320,
          'params' : {}
        };
      `;
      
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.async = true;
      script2.src = '//www.highperformanceformat.com/cb0fcd15f1cc600221094578455852a9/invoke.js';
      script2.onload = () => setIsLoaded(true);
      
      mobileAdRef.current.appendChild(script1);
      mobileAdRef.current.appendChild(script2);
    }
  }, [isMobile, isLoaded]);

  useEffect(() => {
    if (!isMobile && desktopAdRef.current && !isLoaded) {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.async = true;
      script1.innerHTML = `
        atOptions = {
          'key' : '4f719b8be7c355f105aad5d9ecc3ad4a',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.async = true;
      script2.src = '//www.highperformanceformat.com/4f719b8be7c355f105aad5d9ecc3ad4a/invoke.js';
      script2.onload = () => setIsLoaded(true);
      
      desktopAdRef.current.appendChild(script1);
      desktopAdRef.current.appendChild(script2);
    }
  }, [isMobile, isLoaded]);

  return (
    <div className="w-full flex justify-center bg-background border-b border-border/20">
      {isMobile ? (
        <div 
          ref={mobileAdRef} 
          data-testid="adsterra-banner-ad-mobile"
          style={{ minHeight: '50px', width: '320px', display: 'block' }}
        />
      ) : (
        <div 
          ref={desktopAdRef} 
          data-testid="adsterra-banner-ad-desktop"
          style={{ minHeight: '90px', width: '728px', display: 'block' }}
        />
      )}
    </div>
  );
};
