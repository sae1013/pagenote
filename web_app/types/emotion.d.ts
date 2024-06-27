import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      bg: {
        primary: string;
        black: string;
      };
      text: {
        black: string;
      };
    };
    fonts: {
      body: string;
      heading: string;
    };
  }
}
