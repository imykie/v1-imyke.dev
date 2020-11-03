import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Utils/Header/header';
import Mobile from './components/Base/mobile';
import Base from './components/Base/base';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Error from './components/Error/error404';
import Resume from './components/Resume/resume';

function App() {
  const [menu, setMenu] = useState<string[]>(['active_menu', '', '']);

  const activeMenu = (id: number) => {
    switch (id) {
      case 0:
        setMenu(() => ['active_menu', '', '']);
        break;

      case 1:
        setMenu(() => ['', 'active_menu', '']);
        break;

      case 2:
        setMenu(() => ['', '', 'active_menu']);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <Router>
        <div className="mobile_container">
          <Header />
          <div>
            <Switch>
              <Route exact path="/" render={(props) => <Mobile menu={menu} />} />
              <Route exact path="/projects" render={(props) => <Projects menu={menu} activeMenu={activeMenu} />} />
              <Route exact path="/resume" render={(props) => <Resume menu={menu} activeMenu={activeMenu} />} />
              <Route exact path="/contact" render={(props) => <Contact menu={menu} activeMenu={activeMenu} />} />
              <Route component={Error} />
            </Switch>
          </div>
          <div className="social_buttons">
            <a href="https://github.com/MichaelOlatunji" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/_imyke" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/imykel/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="app-container">
          <div className="m-fixed">
            <Base menu={menu} />
          </div>
          <div className="main">
            <div className="pages_container">
              <Switch>
                <Route exact path="/" render={(props) => <Projects menu={menu} activeMenu={activeMenu} />} />
                <Route exact path="/projects" render={(props) => <Projects menu={menu} activeMenu={activeMenu} />} />
                <Route exact path="/resume" render={(props) => <Resume menu={menu} activeMenu={activeMenu} />} />
                <Route exact path="/contact" render={(props) => <Contact menu={menu} activeMenu={activeMenu} />} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
