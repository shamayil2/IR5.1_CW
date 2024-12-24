import Header from '../components/Header';
import Footer from '../components/Footer';
import { moviesData } from './Movies';
import { useParams } from 'react-router-dom';
const MovieDetails = () => {
  const movieIdObj = useParams();
  const movieId = movieIdObj.pageId;
  console.log(movieId);

  const movie = moviesData.find((movie) => movie.id == movieId);

  console.log(movie);

  return (
    <>
      <Header />
      <main className="container">
        <h3>{movie.title}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Title: </b>
            {movie.title}
          </li>
          <li className="list-group-item">
            <b>Genre: </b>
            {movie.genre}
          </li>
          <li className="list-group-item">
            <b>Director: </b>
            {movie.director}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default MovieDetails;
