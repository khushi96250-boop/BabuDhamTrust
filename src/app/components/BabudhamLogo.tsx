import React from 'react';

interface BabudhamLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'full-color' | 'monochrome' | 'white';
}

export const BabudhamLogo: React.FC<BabudhamLogoProps> = ({
  className = '',
  alt = 'Babu Dham Trust Logo',
  ...props
}) => {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={className}
      {...props}
    />
  );
};