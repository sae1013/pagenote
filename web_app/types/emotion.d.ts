import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      bg: {
        primary: string;
      };
      text: {};
    };
    fonts: {
      body: string;
      heading: string;
    };
  }
}
