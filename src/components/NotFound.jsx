/* global document */
import { Link } from 'react-router-dom';

const NotFound = () => {
  document.title = 'Page Not Found';
  return (
    <div className="text-center">
      <i className="d-block fas fa-frown fa-3x" />
      <h3>Page not found</h3>
      <p>You can go back to <Link to="/">homepage</Link>.</p>
    </div>
  );
};

export default NotFound;
