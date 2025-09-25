import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
        <p className="mb-8 text-muted-foreground">Welcome to your dashboard! Here you can view your activity, manage your profile, and access personalized resources.</p>
        {/* Add more dashboard widgets and features here */}
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboard;
