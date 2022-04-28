import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import logo from './assets/svgs/m-imyke.svg';
import Base from './components/Base/base';
import Mobile from './components/Base/mobile';
import Contact from './components/Contact/contact';
import Error from './components/Error/error404';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
import Header from './components/Utils/Header/header';

function App() {
  const [menu, setMenu] = useState<string[]>(['active_menu', '', '']);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
      {isLoading ? (
        <div className="flex justify-center align-middle h-full w-full">
          <img className="w-16 loader" src={logo} alt="loader" />
        </div>
      ) : (
        <Router>
          <div className="mobile_container">
            <Header />
            <div>
              <Switch>
                <Route exact path="/" render={(props) => <Mobile menu={menu} />} />
                <Route exact path="/resume" render={(props) => <Resume menu={menu} activeMenu={activeMenu} />} />
                <Route exact path="/projects" render={(props) => <Projects menu={menu} activeMenu={activeMenu} />} />
                <Route exact path="/contact" render={(props) => <Contact menu={menu} activeMenu={activeMenu} />} />
                <Route component={Error} />
              </Switch>
            </div>
            <div className="social_buttons">
              <a href="https://github.com/imykie" target="_blank" rel="noopener noreferrer">
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
                  <Route exact path="/" render={(props) => <Resume menu={menu} activeMenu={activeMenu} />} />
                  <Route exact path="/resume" render={(props) => <Resume menu={menu} activeMenu={activeMenu} />} />
                  <Route exact path="/projects" render={(props) => <Projects menu={menu} activeMenu={activeMenu} />} />
                  <Route exact path="/contact" render={(props) => <Contact menu={menu} activeMenu={activeMenu} />} />
                  <Route component={Error} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
