/* global window */
import { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeaderMenu: false
    };
    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this);
  }
  toggleHeaderMenu(e) {
    e.preventDefault();
    const { showHeaderMenu } = this.state;
    this.setState({ showHeaderMenu: !showHeaderMenu });
  }
  render() {
    const { showHeaderMenu } = this.state;
    const { pathname } = window.location;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">React+Webpack</Link>
        <button className="navbar-toggler" type="button" onClick={this.toggleHeaderMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navbar-collapse ${showHeaderMenu ? '' : 'collapse'}`}>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
