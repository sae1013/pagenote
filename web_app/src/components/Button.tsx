import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IconType } from "react-icons";

interface StyledButtonProps {
  size?: "small" | "medium" | "large" | "full";
  // styleProps?: React.CSSProperties;
  styleProps?: {
    button?: React.CSSProperties;
    text?: React.CSSProperties;
  };
  outline?: boolean;
  variant?: "primary" | "secondary" | "dark";
}

interface StyledIconButtonProps extends StyledButtonProps {
  iconPosition: "left" | "right";
  styleProps?: {
    button?: React.CSSProperties;
    icon?: React.CSSProperties;
  };
}
interface ButtonProps extends StyledButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

interface IconButtonProps extends StyledIconButtonProps {
  Icon: IconType;
  children: React.ReactNode;
  onClick: () => void;
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

  ${(props) => props.styleProps && css({ ...props.styleProps.button })};

  > span {
    ${(props) => props.styleProps?.text && css({ ...props.styleProps.text })}
  }
`;

const StyledIconButton = styled(StyledButton)<StyledIconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 25px;
    height: 25px;
    ${(props) => props.styleProps?.icon && css({ ...props.styleProps.icon })}
  }
  > span {
    margin-left: 2rem;
  }
`;

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{<span>{children}</span>}</StyledButton>;
}

function IconButton({ children, Icon, ...props }: IconButtonProps) {
  return (
    <StyledIconButton {...props}>
      <Icon />
      <span>{children}</span>
    </StyledIconButton>
  );
}
export { Button, IconButton };
