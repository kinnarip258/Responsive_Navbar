import React from 'react'
import NavBar from './NavBar';

import { Switch, Route} from 'react-router';


const Home = () => {
  return (
      <>
          
          <div className = "hero-section">
                  <p> Welcome to </p>
                  <h1>Home Page</h1>
          </div> 
      </>
  );
};
const About = () => {
  return (
      <>
          
          <div className = "hero-section">
                  <p> Welcome to </p>
                  <h1>About Page</h1>
          </div> 
      </>
  );
};
const Contact = () => {
  return (
      <>
          
          <div className = "hero-section">
                  <p> Welcome to </p>
                  <h1>Contact Page</h1>
          </div> 
      </>
  );
};
const Services = () => {
  return (
      <>
          
          <div className = "hero-section">
                  <p> Welcome to </p>
                  <h1>Services Page</h1>
          </div> 
      </>
  );
};




function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path = "/"><Home /></Route>
        <Route exact path = "/About"><About /></Route>
        <Route exact path = "/Services"><Services /></Route>
        <Route exact path = "/Contact"><Contact /></Route>
      </Switch>
    </>
  );
}

export default App;
export {Home , Contact, About, Services}