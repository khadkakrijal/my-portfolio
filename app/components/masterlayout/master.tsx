import React from 'react';
import Navbar from './navbar';

const MasterLayout: React.FC<any> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col h-full min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex h-full">{children}</main>
    </div>
  );
};

export default MasterLayout;
