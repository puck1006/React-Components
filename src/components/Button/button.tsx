import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";

export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  btnType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  href?: string;
}

type commonButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type anchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<commonButtonProps & anchorButtonProps>;

export const Button: FC<ButtonProps> = (props) => {
  const { btnType, size, disabled, className, children, href, ...rest } = props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link" && href) {
    return (
      <a href={href} {...rest} className={classes}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} {...rest} disabled={disabled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;