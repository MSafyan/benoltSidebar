import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import home from './pages/home';
import SubMenu1_1 from './pages/primaryMenu1/SubMenu1_1';
import SubMenu1_2 from './pages/primaryMenu1/SubMenu1_2';
import SubMenu2_1 from './pages/primaryMenu2/SubMenu2_1';
import SubMenu2_2 from './pages/primaryMenu2/SubMenu2_2';
import PrimaryMenu3 from './pages/primaryMenu3';

import { ThemeContext } from './context';

function App() {
  const [context,setContext]=React.useState({openSide:true})

	return (
		<div className='App'>
      <ThemeContext.Provider value={{context,setContext}}>
        <Router>

          <Switch>
            <Route exact path='/' component={home}/>
            <Route exact path='/submenu1.1' render={(props) => <SubMenu1_1 title="Sub Menu 1.1" list={["Primary Menu 1","Sub Menu 1.1"]}  {...props}/>} />
            <Route exact path='/submenu1.2' render={(props) => <SubMenu1_2 title="Sub Menu 1.2" list={["Primary Menu 1","Sub Menu 1.2"]}  {...props}/>} />
            <Route exact path='/submenu2.1' render={(props) => <SubMenu2_1 title="Sub Menu 2.1" list={["Primary Menu 2","Sub Menu 2.1"]}  {...props}/>} />
            <Route exact path='/submenu2.2' render={(props) => <SubMenu2_2 title="Sub Menu 2.2" list={["Primary Menu 2","Sub Menu 2.2"]}  {...props}/>} />
            <Route exact path='/primarymenu3' render={(props) => <PrimaryMenu3 title="Primary Menu 3"/>} />
          </Switch> 
        </Router>
      </ThemeContext.Provider>
		</div>
	);
}

export default App;