
import React from 'react';
import { cn } from '@/lib/utils';

interface AuthFormContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background to-muted">
      <div 
        className={cn(
          "w-full max-w-md mx-auto overflow-hidden fade-in slide-in-bottom",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default AuthFormContainer;
