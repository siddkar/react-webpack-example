/* global document */
import { render } from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import App from './components/App.jsx';
import './styles/main.scss';

render(
  <BrowserRouter history={browserHistory}>
    <App />
  </BrowserRouter>
  , document.body
);
