import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';
export const moviesData = [
  {
    id: 1,
    title: 'Inception',
    genre: 'Sci-Fi',
    director: 'Christopher Nolan',
    views: 2000,
    rating: 7.8,
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    director: 'Frank Darabont',
    views: 3000,
    rating: 8.8,
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    genre: 'Crime',
    director: 'Quentin Tarantino',
    views: 4000,
    rating: 6.8,
  },
  {
    id: 4,
    title: 'The Godfather',
    genre: 'Crime',
    director: 'Francis Ford Coppola',
    views: 1000,
    rating: 5.8,
  },
  {
    id: 5,
    title: 'The Dark Knight',
    genre: 'Action',
    director: 'Christopher Nolan',
    views: 5000,
    rating: 9,
  },
];

const Movies = () => {
  const [genre, setGenre] = useState('All');
  const filteredMovies =
    genre === 'All'
      ? moviesData
      : moviesData.filter((movie) => movie.genre === genre);

  console.log(filteredMovies);
  return (
    <>
      <Header />
      <main className="container py-4">
        <label htmlFor="genreSelect">Filter by Genre:</label>
        <select
          onChange={(event) => setGenre(event.target.value)}
          className="form-select mb-4"
          id="genreSelect"
        >
          <option value="All">All Genres</option>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
        </select>

        <ul className="list-group">
          {filteredMovies.map((movie) => (
            <li className="list-group-item">
              <h5>{movie.title}</h5>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <Link
                to={`/moviedetails/${movie.id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
