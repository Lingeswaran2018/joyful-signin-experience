
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-border/40 glass-effect backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-display font-medium">Luminous</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Testimonials</a>
            <a href="#faq" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                  Sign in
                </Link>
                <Link to="/signup">
                  <Button className="bg-primary text-white hover:bg-primary/90">
                    Get started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      
      {/* Hero section */}
      <main className="flex-1">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Accelerate your workflow with powerful tools
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/70 max-w-3xl mx-auto">
              A comprehensive platform designed to streamline your productivity, enhance team collaboration, and deliver exceptional results.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {!isAuthenticated && (
                <>
                  <Link to="/signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get started for free
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Sign in to your account
                    </Button>
                  </Link>
                </>
              )}
              {isAuthenticated && (
                <Link to="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    Go to Dashboard
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-display text-sm font-medium">Luminous</span>
          </div>
          <div className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} Luminous. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
