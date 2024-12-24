import Header from '../components/Header';
import Footer from '../components/Footer';
import { moviesData } from './Movies';
const Report = () => {
  console.log(moviesData);
  const mostWatched = moviesData.reduce((acc, curr) =>
    curr.views > acc.views ? curr : acc
  );
  console.log(mostWatched);

  const highestRated = moviesData.reduce((acc, curr) =>
    curr.rating > acc.rating ? curr : acc
  );
  console.log(highestRated);
  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>Movie Report</h2>
        <hr />
        <h2>Most Watched Movie</h2>
        <p>Title: {mostWatched.title}</p>
        <p>Views: {mostWatched.views}</p>
        <h2>Highest Rated Movie</h2>
        <p>Title: {highestRated.title}</p>
        <p>Rating: {highestRated.rating}</p>
        <h2>Total Movies</h2>
        <p>{moviesData.length}</p>
      </main>

      <Footer />
    </>
  );
};

export default Report;
