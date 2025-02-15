import { ButtonSize, ButtonVariant } from './index.type';
import s from './style.module.scss';
import classNames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    as?: 'button' | 'a';
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    href?: string;
}

export default function Button({
    as = 'button',
    variant = ButtonVariant.PRIMARY,
    size = ButtonSize.MEDIUM,
    children,
    className,
    href,
    ...props
}: ButtonProps) {
    const buttonClassName = classNames(
        s.button,
        s[variant],
        s[size],
        className
    );

    if (as === 'a') {
        return (
            <a href={href} className={buttonClassName}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClassName} {...props}>
            {children}
        </button>
    );
}