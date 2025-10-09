import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

const gradient = 'linear-gradient(0deg, #7868E5 0%, #968EEE 100%)';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
    <button
        {...props}
        style={{
            background: gradient,
            color: '#111111',
            border: 'none',
            borderRadius: '999px',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 500,
            boxShadow: '0 2px 8px rgba(120, 104, 229, 0.15)',
            transition: 'opacity 0.2s',
            ...props.style,
        }}
    >
        {children}
    </button>
);

export default Button;