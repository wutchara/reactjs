import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Headers from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return <div>
    <Headers />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
  </div>;
}

export default App;