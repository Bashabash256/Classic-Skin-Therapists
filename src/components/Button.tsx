import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500 shadow-sm",
    secondary: "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900 shadow-sm",
    white: "bg-white text-slate-900 hover:bg-slate-50 focus:ring-slate-100 shadow-sm",
    outline: "border border-pink-200 text-slate-800 hover:border-pink-600 hover:text-pink-600 focus:ring-pink-500 bg-transparent shadow-sm",
    ghost: "text-slate-600 hover:text-pink-600 hover:bg-pink-50 focus:ring-pink-500 bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-5 py-2 text-sm",
    lg: "px-6 py-2.5 text-sm",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return (
        <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
