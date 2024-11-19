export const loadKaTeX = () => {
    if (typeof window !== 'undefined') {
      return new Promise((resolve) => {
        if (window.katex) {
          resolve();
          return;
        }
  
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
        script.defer = true;
        document.head.appendChild(script);
  
        const autoRenderScript = document.createElement('script');
        autoRenderScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js';
        autoRenderScript.defer = true;
        autoRenderScript.onload = () => resolve();
        document.head.appendChild(autoRenderScript);
      });
    }
    return Promise.resolve();
  };