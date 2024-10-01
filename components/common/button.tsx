import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = 'rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
  
  const variantStyles = {
    default: 'text-white bg-black hover:opacity-80 text-sm font-bold',
    outline: 'text-white bg-black'
  }
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}