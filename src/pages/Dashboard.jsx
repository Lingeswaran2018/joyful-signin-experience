
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 slide-in-bottom">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, {user?.name || 'User'}</p>
            </div>
            <Button onClick={logout} variant="outline">Sign Out</Button>
          </div>
        </header>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="fade-in glass-effect border-none shadow-md hover:shadow-lg transition-all duration-300" style={{animationDelay: `${i * 0.1}s`}}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Project {i}</CardTitle>
                <CardDescription>Description for Project {i}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-16 bg-secondary/50 rounded-md flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Project Content</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full bg-white/40 backdrop-blur-sm border border-input/50">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
