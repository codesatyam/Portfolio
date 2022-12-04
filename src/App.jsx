import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Component/Home";
import Project from './Component/Project';
import Contact from './Component/Contact';
// import Navbar from './Component/Navbar';
// import Blog from "./Component/Blog";
import About from "./Component/About";
import Footer from "./Component/Footer";
 
import "./App.css";
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    < >
    {/* <Navbar/> */}
      <Switch>
        <Route exact path="/Home" target="_self" component={Home} />
        <Route exact path="/about" target="_self" component={About} />
        <Route exact path="/project" target="_self" component={Project} />
        {/* <Route exact path="/blog" target="_self" component={Blog} /> */}
        <Route exact path="/contact" component={Contact} />
        <Redirect to='/Home'/>
      </Switch>
      <Footer />
    </>
  );
};

export default App;

