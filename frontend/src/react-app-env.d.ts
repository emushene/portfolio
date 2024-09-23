/// <reference types="react-scripts" />


declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_KEY: string;
      REACT_APP_PUBLIC_SERVICE_ID: string;
      REACT_APP_PUBLIC_TEMPLATE_ID: string;
      REACT_APP_PUBLIC_KEY: string;
    }
  }
  