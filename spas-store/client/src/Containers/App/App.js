//REACT IMPORTS
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//EXTERNAL NPM IMPORTS
import Radium from "radium";
import ReactPageScroller from "react-page-scroller";
import AOS from 'aos';

//Importing Components
//Navbar/Sidebar component
import Sidebar from './../../Components/sidebar/sidebar';
import Front from './../../Components/front/front';
import Home from './../../Components/home/home';
import About from './../../Components/about/about';
import Contact from './../../Components/contact/contact';

//CSS STYLING
import './App.css';
import 'aos/dist/aos.css';

//Images
import cityblur from '../../Images/city-blur.jpg';
import scrollIcon from '../../Images/scroll-icon.png';

class App extends Component {
  //SUPER PROPS
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, showMe: false };
    this._pageScroller = null;
    AOS.init({
      duration: 1200
    });
  }

  //REFRESHES WHEN COMPONENT MOUNTS
  componentDidMount() {
    AOS.refresh();
  }

  //GOES TO SPECIFIC PAGE ON SELECT
  goToPage = (eventKey) => {
    this._pageScroller.goToPage(eventKey);
  }

  //GRABS PAGE NUMBER ON PAGE CHANGE
  pageOnChange = (number) => {
    if (number === 0) {
      this.setState({ showMe: false });
    } else {
      this.setState({ showMe: true });
    }
    this.setState({ currentPage: number });
  };

  render() {

    let styles = {

      app: {
        backgroundImage: `url(${cityblur})`,
        backgroundSize: 'cover',
        color: "white"
      },
      scrl: {
        position: 'fixed',
        backgroundImage: `url(${scrollIcon})`,
        backgroundSize: 'cover',
        width: '100px',
        height: '100px',
        margin: '0 auto',
        bottom: '0',
        left: '0',
        right: '0',
      }
    }

    return (
      <div data-aos="fade-down" style={styles.app}>
        {/* <Pager className="pagination-additional-class" bsSize="large" style={style.links}>
          {pagesNumbers}
        </Pager> */}
        {/* {pagesNumbers} */}
        <div style={styles.scrl}></div>
        <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
          <Front />
          <Home />
          <About />
          <Contact />
        </ReactPageScroller>
        {
          this.state.showMe ?
            <Sidebar
              goToPage={this.goToPage}
            /> :
            null
        }
      </div>
    );
  }
}

export default App;
