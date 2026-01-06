import React from 'react';
import ShimmerCard from './ShimmerCard';

const ShimmerRow = ({ count = 8 }) => {
  const placeholders = Array.from({ length: count });

  return (
    <div className="flex space-x-4 overflow-x-auto px-2 scrollbar-hide">
      {placeholders.map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerRow;
