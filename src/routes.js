import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import history from './history';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from './Reducers';

import Auth from './Auth/Auth';
import App from './App';
import Callback from './Callback/Callback';
import Profile from './Profile/Profile';
import AddPin from './AddPin/AddPin';
import Home from './Home/Home';
import Splash from './Splash/Splash';
import UserPins from './UserPins/UserPins';
import ViewPins from './ViewPins/ViewPins';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const createStoreWithMiddleware = applyMiddleware(reduxThunk,
                                                  reduxPromise)(createStore);
export const store = createStoreWithMiddleware(reducers);

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history} component={App}>
      <div>
         <Route path="/" render={(props) => <App auth={auth} {...props} />} />
         <Route path="/splash" render={(props) => <Splash auth={auth} {...props }/>} />
         <Route path="/viewpins" render={(props) => <ViewPins auth={auth} {...props} /> } />
         <Route path="/callback" render={(props) => {
           handleAuthentication(props);
           return <Callback {...props} />
         }}/>
         <Route path="/profile" render={(props) => (
           !auth.isAuthenticated() ? (
             <Redirect to="/"/>
           ) : (
             <Profile auth={auth} {...props} />
           )
         )} />
         <Route path="/home" render={(props) => (
           !auth.isAuthenticated() ? (
             <Redirect to="/splash"/>
           ) : (
             <Home auth={auth} {...props} />
           )
         )} />
         <Route path="/addpin" render={(props) => (
           !auth.isAuthenticated() ? (
             <Redirect to="/splash"/>
           ) : (
             <AddPin auth={auth} {...props} />
           )
         )} />
         <Route path="/userpins" render={(props) => (
           !auth.isAuthenticated() ? (
             <Redirect to="/splash"/>
           ) : (
             <UserPins auth={auth} {...props} />
           )
         )} />
       </div>
      </Router>
    </Provider>
  )
}
