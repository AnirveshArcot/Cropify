import React from 'react'

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div className="text-center py-4 bg-background">
      <p className='text-sm'>&copy; {year} All rights reserved.</p>
    </div>
  );
}

export default Footer
