import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "../styles/App.sass";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Page from "./Page/Page";
import ArrowUp from "./ArrowUp/ArrowUp";

class App extends Component {
  state = {
    sideDrawerOpen: false,
    arrowUp: false,
    headerHeight: 0,
    burgerColor: true,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  closeNav = () => {
    setTimeout(() => {
      this.setState({ sideDrawerOpen: false });
    }, 500);
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if (this.state.sideDrawerOpen) {
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
        <div className="app" style={{ height: "100%" }}>
          <Toolbar
            open={this.state.sideDrawerOpen}
            drawerToggleHandler={this.drawerToggleClickHandler}
          />
          <SideDrawer show={this.state.sideDrawerOpen} close={this.closeNav} />
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
