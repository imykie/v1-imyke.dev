import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Utils/Header/header';
import Mobile from './components/Base/mobile';

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
        {/* <div className="mobile_container"> */}
        <Header />
        <div>
          <Switch>
            <Route exact path="/" render={(props) => <Mobile menu={menu} />} />
          </Switch>
        </div>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
