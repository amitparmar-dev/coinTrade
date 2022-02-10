
import React from 'react';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from './PrivateRoute';
import Settings from './Settings';
import Header from './Header'
function App(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const history = useHistory();
 
  const handleAuth = (flag) => {
    console.log('flag in App',history)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
       
            <Route path="/" exact > <Login handleAuth={handleAuth}/> </Route>
            <PrivateRoute path='/Dashboard' isAuthenticated={isAuthenticated} exact >
              <Dashboard />
            </PrivateRoute> 
            <PrivateRoute path='/Settings' isAuthenticated={isAuthenticated} exact >
              <Settings />
            </PrivateRoute> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
