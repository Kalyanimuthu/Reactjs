// MovieCard.jsx
import React from 'react';

const MovieCard = ({ title, genre, rating, isTrending, poster, children }) => {
  const highlightStyle = rating > 8.0 ? 'border-2 border-yellow-400' : 'border';

  return (
    <div className={`p-4 rounded shadow-md ${highlightStyle} bg-white`}>
      <img src={poster} alt={title} className="w-full h-64 object-cover rounded" />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600">{genre}</p>
      <div className="flex items-center mt-1">
        <span className="text-yellow-500 mr-2">⭐ {rating}</span>
        {isTrending && <span className="ml-2 text-red-500 font-bold">🔥 Trending</span>}
        {rating >= 8.5 && <span className="ml-2 text-green-600 font-bold">Top Rated</span>}
      </div>
      <div className="mt-2 text-sm text-gray-700">{children}</div>
    </div>
  );
};

export default MovieCard;
