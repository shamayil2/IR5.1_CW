import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <section>
          {' '}
          <img src="https://placehold.co/250?text=Movies+Cover" alt="" />
        </section>
        <section className="py-4">
          <h3>Our Movies</h3>
          <p>
            Explore our collection of movies spanning various genres and themes
          </p>
          <Link to="/movies" className="btn btn-primary">
            View Movies
          </Link>
        </section>
        <section className="py-4">
          <h3>Movie Report</h3>
          <p>Check out our curated report on movies.</p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
