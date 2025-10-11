// MovieList.jsx
import React from 'react';
import MovieCard from './Moviecard';


const movies = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    rating: 8.8,
    isTrending: true,
    poster: 'https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
  },
  {
    id: 2,
    title: 'The Godfather',
    genre: 'Crime',
    rating: 9.2,
    isTrending: false,
    poster: 'https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg',
  },
  {
    id: 3,
    title: 'Interstellar',
    genre: 'Adventure',
    rating: 8.6,
    isTrending: true,
    poster: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
  },
];

const MovieList = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">🎬 Movie Recommendations</h1>
      {movies.length === 0 ? (
        <p className="text-red-500 text-xl">No Movies Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              isTrending={movie.isTrending}
              poster={movie.poster}
            >
              <p>User Review: Loved the visuals and storyline!</p>
            </MovieCard>
            
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
