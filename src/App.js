import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import "./styles/App.sass";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Page from "./components/Page/Page";
import ArrowUp from "./components/ArrowUp/ArrowUp";

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
    const headerHeight = document.querySelector(".header").offsetHeight;
    this.setState({ headerHeight: headerHeight });

    if (window.scrollY > this.state.headerHeight) {
      this.setState({ burgerColor: true });
    } else if (window.scrollY < this.state.headerHeight) {
      this.setState({ burgerColor: false });
    }

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
            color={this.state.burgerColor}
            drawerToggleHandler={this.drawerToggleClickHandler}
          />
          <SideDrawer show={this.state.sideDrawerOpen} close={this.closeNav} />
          <Header />
          <main>
            <ArrowUp open={this.state.arrowUp} scroll={this.scrollTo} />
            <Page />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
