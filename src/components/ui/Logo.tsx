import React from 'react';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({ 
  className, 
  showText = true,
  variant = 'dark'
}) => {
  const textColor = variant === 'dark' ? 'text-primary' : 'text-white';
  const iconColor = variant === 'dark' ? '#1E3A5F' : '#FFFFFF';
  const leafColor = variant === 'dark' ? '#1E3A5F' : '#FFFFFF'; // Using primary for leaf in mono or specific color

  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      {/* Logo Icon - Compass/Leaf Concept */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 shrink-0">
        <path d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z" stroke={iconColor} strokeWidth="2.5"/>
        <path d="M20 6V14" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 26V34" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M34 20H26" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 20H6" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round"/>
        {/* Leaf/Needle Center */}
        <path d="M20 10C20 10 24 16 24 20C24 24 20 30 20 30C20 30 16 24 16 20C16 16 20 10 20 10Z" fill={leafColor}/>
        <path d="M20 10V30" stroke="white" strokeWidth="1" strokeOpacity="0.5"/>
      </svg>

      {showText && (
        <div className={cn("flex flex-col leading-none", textColor)}>
          <span className="font-bold text-2xl tracking-tight">Navi<span className="text-secondary font-normal">Life</span></span>
        </div>
      )}
    </div>
  );
};
