/* global document */
const Home = () => {
  document.title = 'Home';
  return (
    <div className="text-center">
      <h1>Home</h1>
      <img src="/images/logo.png" alt="logo" className="d-block mx-auto mb-4" />
      <p>A simple webapp example which uses React + Webpack + Babel + Sass + FontAwesome!</p>
      <p className="text-left">
        Basic Features:
        <br />
        <ul>
          <li>Offline page</li>
          <li>NotFound page</li>
          <li>WebApp manifest.json</li>
          <li>SPA Routing page</li>
          <li>Babel transpiler (ES2015 + JSX React)</li>
          <li>Multi-env Webpack Bundler</li>
        </ul>
      </p>
    </div>
  );
};

export default Home;
