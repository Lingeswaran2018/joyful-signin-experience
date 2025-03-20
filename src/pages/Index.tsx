
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { isAuthenticated, user } = useAuth();

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
                    Create account
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
            <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 mb-6 animate-fade-in stagger-1">
              Introducing Luminous
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-balance mb-6 animate-fade-in stagger-2">
              A beautiful experience crafted with precision
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in stagger-3">
              Discover the perfect combination of form and function. Every detail has been considered, every interaction refined.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in stagger-4">
              {isAuthenticated ? (
                <Link to="/dashboard">
                  <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 rounded-full text-base">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/signup">
                    <Button className="bg-primary text-white hover:bg-primary/90 h-12 px-8 rounded-full text-base">
                      Get started
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" className="h-12 px-8 rounded-full text-base">
                      Learn more
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </section>
        
        {/* Preview image */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl animate-fade-in stagger-5">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary/10 pointer-events-none"></div>
              <div className="glass-effect border border-white/20 rounded-xl overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground">Dashboard Preview</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border/40">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2023 Luminous. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
