import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonSize = 'large' | 'small';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Decorative icon shown after the label, e.g. <ArrowIcon />. */
  icon?: ReactNode;
}

/** A native button in the brand's primary or secondary style. */
export const Button = ({
  children,
  variant = 'primary',
  size = 'large',
  icon,
  type = 'button',
  className,
  ...rest
}: ButtonProps) => {
  const classes = [
    'button',
    `button--${variant}`,
    size === 'small' ? 'button--small' : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type={type} className={classes} {...rest}>
      {children}
      {icon !== undefined && (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};
