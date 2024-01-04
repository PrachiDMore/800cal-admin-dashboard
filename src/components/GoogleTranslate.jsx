import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const googleTranslateScript = document.createElement('script');

    googleTranslateScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    googleTranslateScript.async = true;

    document.body.appendChild(googleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'es',
          layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
        },
        'google_translate_element'
      );
      return () => {
        const googleTranslateElement = document.getElementById('google_translate_element');
        if (googleTranslateElement) {
          googleTranslateElement.remove();
        }
      }
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
