import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./App.css";

import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Christian Escherich',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Christian\'s Portfolio',
        subTitle: 'A Quick React Portfolio',
        text: 'Checkout out a few of my projects'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      },
    }
  }
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="boarder-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Christian Escherich</Navbar.Brand>

            <Navbar.Toggle className="border-0" Aria-contols="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Footer />
          
        </Container>
      </Router>
    )
  }
}

export default App;
