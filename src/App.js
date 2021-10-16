import NavMenu from './components/NavMenu';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from '../src/components/Footer'
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <Router>
        <NavMenu/>
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/" >
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>  
  );
}

export default App;
