import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../styles/App.sass";

import Toolbar from "./Toolbar/Toolbar";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Page from "./Page/Page";
import ArrowUp from "./ArrowUp/ArrowUp";

class App extends Component {
  state = {
    menuOpen: false,
    arrowUp: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { menuOpen: !prevState.menuOpen };
    });
  };

  closeNav = () => {
    setTimeout(() => {
      this.setState({ menuOpen: false });
    }, 500);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.state.menuOpen) {
      document.body.style.overflow = "hidden";
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = (e) => {
    if (window.scrollY >= 1000) {
      this.setState({ arrowUp: true });
    } else if (window.scrollY <= 1000) {
      this.setState({ arrowUp: false });
    }
  };
  scrollTo = () => {
    scroll.scrollTo(0);
  };
  render() {
    return (
      <Router>
        <div className="app">
          <Toolbar
            open={this.state.menuOpen}
            drawerToggleHandler={this.drawerToggleClickHandler}
          />
          <Menu
            show={this.state.menuOpen}
            scroll={this.scrollTo}
            close={this.closeNav}
          />
          <Header />
          <main>
            <ArrowUp open={this.state.arrowUp} scroll={this.scrollTo} />
            <Page />
          </main>
          <Footer scroll={this.scrollTo} />
        </div>
      </Router>
    );
  }
}

export default App;
