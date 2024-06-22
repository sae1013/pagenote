import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface StyledButtonProps {
  size?: "small" | "medium" | "large" | "full";
  styleProps?: React.CSSProperties;
  outline?: boolean;
  variant?: "primary" | "secondary" | "dark";
}

export const buttonSize = {
  small: css`
    width: 4rem;
    height: 4rem;
  `,
  medium: css``,

  large: css``,

  full: css`
    width: 100%;
  `,
};

export const buttonColor = {
  primary: css`
    background-color: #ffde59;
  `,
  secondary: css``,
  dark: css`
    background-color: #0c1844;
    color: #fff;
  `,
};

const StyledButton = styled.button<StyledButtonProps>`
  text-decoration: none;
  border: ${(props) => (props.outline ? "1px solid black" : "none")};
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  user-select: none;
  border-radius: 0.5rem;
  font-weight: 700;
  :hover {
    opacity: 0.7;
  }
  transition: all 0.2s ease;
  ${(props) => props.variant && buttonColor[props.variant]};
  ${(props) => props.size && buttonSize[props.size]};

  ${(props) => props.styleProps && css({ ...props.styleProps })};
`;

interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
