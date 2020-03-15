import React from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
