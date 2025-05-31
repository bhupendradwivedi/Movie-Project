import React from 'react';

const Loader = () => {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-red-700"></div>
    </div>
  );
};

export default Loader;
