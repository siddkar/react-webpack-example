/* global window, navigator */
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Offline from './Offline.jsx';
import NotFound from './NotFound.jsx';
import Home from './Home.jsx';
import About from './About.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: true
    };
    this.checkConnection = this.checkConnection.bind(this);
  }
  componentWillMount() {
    window.addEventListener('online', this.checkConnection);
    window.addEventListener('offline', this.checkConnection);
  }
  componentWillUnmount() {
    window.removeEventListener('online');
    window.removeEventListener('offline');
  }
  checkConnection() {
    this.setState({ isOnline: navigator.onLine });
  }
  render() {
    const { isOnline } = this.state;
    return (
      <div>
        <Header />
        <main className="container pt-4 jumbotron">
          {
            isOnline ?
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
              </Switch>
              :
              <Offline />
          }
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
